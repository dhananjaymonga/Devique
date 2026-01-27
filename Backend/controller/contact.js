const Contact = require('../models/Contact');
const excelService = require('../services/exelservice');

// Submit Contact Form
exports.submitContact = async (req, res) => {
  try {
    const { name, email, phone, city, qualification, message } = req.body;

    // Validation
    if (!name || !email || !phone || !city || !qualification || !message) {
      return res.status(400).json({ 
        success: false,
        message: 'All fields are required' 
      });
    }

    // Email validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false,
        message: 'Invalid email format' 
      });
    }

    // Phone validation (10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
      return res.status(400).json({ 
        success: false,
        message: 'Phone number must be 10 digits' 
      });
    }

    // Message length validation
    if (message.trim().length < 10) {
      return res.status(400).json({ 
        success: false,
        message: 'Message must be at least 10 characters' 
      });
    }

    // Get IP address
    const ipAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    // Create new contact
    const newContact = new Contact({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.replace(/\D/g, ''),
      city: city.trim(),
      qualification,
      message: message.trim(),
      ipAddress
    });

    // Save to MongoDB
    const savedContact = await newContact.save();

    // Save to Excel
    await excelService.appendToExcel(savedContact);

    console.log('✅ New contact submission:', {
      id: savedContact._id,
      name: savedContact.name,
      email: savedContact.email
    });

    res.status(201).json({ 
      success: true,
      message: 'Contact form submitted successfully',
      data: {
        id: savedContact._id,
        name: savedContact.name,
        email: savedContact.email,
        submittedAt: savedContact.submittedAt
      }
    });

  } catch (error) {
    console.error('❌ Error submitting contact form:', error);
    res.status(500).json({ 
      success: false,
      message: 'Failed to submit contact form',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// Get all contacts
exports.getAllContacts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const status = req.query.status;
    const skip = (page - 1) * limit;

    const query = {};
    if (status && ['new', 'read', 'replied'].includes(status)) {
      query.status = status;
    }

    const contacts = await Contact.find(query)
      .sort({ submittedAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Contact.countDocuments(query);

    res.json({
      success: true,
      data: contacts,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('❌ Error fetching contacts:', error);
    res.status(500).json({ 
      success: false,
      message: 'Failed to fetch contacts' 
    });
  }
};

// Update contact status
exports.updateContactStatus = async (req, res) => {
  try {
    const { status } = req.body;

    if (!['new', 'read', 'replied'].includes(status)) {
      return res.status(400).json({ 
        success: false,
        message: 'Invalid status value' 
      });
    }

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!contact) {
      return res.status(404).json({ 
        success: false,
        message: 'Contact not found' 
      });
    }

    await excelService.updateContactInExcel(req.params.id, contact);

    res.json({ 
      success: true,
      message: 'Status updated successfully',
      data: contact 
    });
  } catch (error) {
    console.error('❌ Error updating status:', error);
    res.status(500).json({ 
      success: false,
      message: 'Failed to update status' 
    });
  }
};

// Delete contact
exports.deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({ 
        success: false,
        message: 'Contact not found' 
      });
    }

    await excelService.deleteContactFromExcel(req.params.id);

    res.json({ 
      success: true,
      message: 'Contact deleted successfully',
      data: { id: contact._id, name: contact.name }
    });
  } catch (error) {
    console.error('❌ Error deleting contact:', error);
    res.status(500).json({ 
      success: false,
      message: 'Failed to delete contact' 
    });
  }
};

// Get statistics
exports.getContactStats = async (req, res) => {
  try {
    const total = await Contact.countDocuments();
    const newCount = await Contact.countDocuments({ status: 'new' });
    const readCount = await Contact.countDocuments({ status: 'read' });
    const repliedCount = await Contact.countDocuments({ status: 'replied' });

    const qualificationStats = await Contact.aggregate([
      { $group: { _id: '$qualification', count: { $sum: 1 } } }
    ]);

    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const recentCount = await Contact.countDocuments({
      submittedAt: { $gte: sevenDaysAgo }
    });

    res.json({
      success: true,
      data: {
        total,
        byStatus: { new: newCount, read: readCount, replied: repliedCount },
        byQualification: qualificationStats.reduce((acc, item) => {
          acc[item._id] = item.count;
          return acc;
        }, {}),
        recentSubmissions: recentCount
      }
    });
  } catch (error) {
    console.error('❌ Error fetching stats:', error);
    res.status(500).json({ 
      success: false,
      message: 'Failed to fetch statistics' 
    });
  }
};

// Download Excel
exports.downloadExcel = (req, res) => {
  excelService.downloadExcelFile(req, res);
};

// Export to Excel
exports.exportToExcel = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ submittedAt: -1 });
    excelService.exportContacts(contacts, req, res);
  } catch (error) {
    console.error('❌ Error exporting contacts:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to export contacts'
    });
  }
};

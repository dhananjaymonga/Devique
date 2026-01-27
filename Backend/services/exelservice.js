const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const EXCEL_DIR = path.join(__dirname, '../data');
const EXCEL_FILE = path.join(EXCEL_DIR, 'contacts.xlsx');

// Ensure data directory exists
if (!fs.existsSync(EXCEL_DIR)) {
  fs.mkdirSync(EXCEL_DIR, { recursive: true });
}

// Initialize Excel file
function initializeExcelFile() {
  if (!fs.existsSync(EXCEL_FILE)) {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet([]);
    XLSX.utils.book_append_sheet(wb, ws, 'Contacts');
    XLSX.writeFile(wb, EXCEL_FILE);
    console.log('✅ Excel file initialized');
  }
}

initializeExcelFile();

// Append contact to Excel
exports.appendToExcel = async (contact) => {
  try {
    let wb;
    if (fs.existsSync(EXCEL_FILE)) {
      wb = XLSX.readFile(EXCEL_FILE);
    } else {
      wb = XLSX.utils.book_new();
    }

    let ws = wb.Sheets['Contacts'];
    let data = ws ? XLSX.utils.sheet_to_json(ws) : [];

    data.push({
      'ID': contact._id.toString(),
      'Name': contact.name,
      'Email': contact.email,
      'Phone': contact.phone,
      'City': contact.city,
      'Qualification': contact.qualification,
      'Message': contact.message,
      'Status': contact.status,
      'Submitted At': contact.submittedAt.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      'IP Address': contact.ipAddress || 'N/A'
    });

    const newWs = XLSX.utils.json_to_sheet(data);
    newWs['!cols'] = [
      { wch: 25 }, { wch: 20 }, { wch: 30 }, { wch: 15 }, { wch: 15 },
      { wch: 15 }, { wch: 40 }, { wch: 10 }, { wch: 20 }, { wch: 15 }
    ];

    if (wb.Sheets['Contacts']) {
      wb.Sheets['Contacts'] = newWs;
    } else {
      XLSX.utils.book_append_sheet(wb, newWs, 'Contacts');
    }

    XLSX.writeFile(wb, EXCEL_FILE);
    return true;
  } catch (error) {
    console.error('❌ Error saving to Excel:', error);
    return false;
  }
};

// Update contact in Excel
exports.updateContactInExcel = async (contactId, updatedContact) => {
  try {
    if (!fs.existsSync(EXCEL_FILE)) return false;

    const wb = XLSX.readFile(EXCEL_FILE);
    const ws = wb.Sheets['Contacts'];
    let data = XLSX.utils.sheet_to_json(ws);

    const index = data.findIndex(item => item.ID === contactId.toString());
    if (index !== -1) {
      data[index] = {
        'ID': updatedContact._id.toString(),
        'Name': updatedContact.name,
        'Email': updatedContact.email,
        'Phone': updatedContact.phone,
        'City': updatedContact.city,
        'Qualification': updatedContact.qualification,
        'Message': updatedContact.message,
        'Status': updatedContact.status,
        'Submitted At': updatedContact.submittedAt.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        'IP Address': updatedContact.ipAddress || 'N/A'
      };

      const newWs = XLSX.utils.json_to_sheet(data);
      newWs['!cols'] = [
        { wch: 25 }, { wch: 20 }, { wch: 30 }, { wch: 15 }, { wch: 15 },
        { wch: 15 }, { wch: 40 }, { wch: 10 }, { wch: 20 }, { wch: 15 }
      ];

      wb.Sheets['Contacts'] = newWs;
      XLSX.writeFile(wb, EXCEL_FILE);
      return true;
    }
    return false;
  } catch (error) {
    console.error('❌ Error updating Excel:', error);
    return false;
  }
};

// Delete contact from Excel
exports.deleteContactFromExcel = async (contactId) => {
  try {
    if (!fs.existsSync(EXCEL_FILE)) return false;

    const wb = XLSX.readFile(EXCEL_FILE);
    const ws = wb.Sheets['Contacts'];
    let data = XLSX.utils.sheet_to_json(ws);

    data = data.filter(item => item.ID !== contactId.toString());

    const newWs = XLSX.utils.json_to_sheet(data);
    newWs['!cols'] = [
      { wch: 25 }, { wch: 20 }, { wch: 30 }, { wch: 15 }, { wch: 15 },
      { wch: 15 }, { wch: 40 }, { wch: 10 }, { wch: 20 }, { wch: 15 }
    ];

    wb.Sheets['Contacts'] = newWs;
    XLSX.writeFile(wb, EXCEL_FILE);
    return true;
  } catch (error) {
    console.error('❌ Error deleting from Excel:', error);
    return false;
  }
};

// Download Excel file
exports.downloadExcelFile = (req, res) => {
  try {
    if (!fs.existsSync(EXCEL_FILE)) {
      return res.status(404).json({
        success: false,
        message: 'Excel file not found'
      });
    }

    res.download(EXCEL_FILE, 'contacts.xlsx', (err) => {
      if (err) {
        console.error('❌ Error downloading file:', err);
        res.status(500).json({
          success: false,
          message: 'Failed to download file'
        });
      }
    });
  } catch (error) {
    console.error('❌ Error downloading Excel:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to download Excel file'
    });
  }
};

// Export contacts
exports.exportContacts = (contacts, req, res) => {
  try {
    const data = contacts.map(contact => ({
      'ID': contact._id.toString(),
      'Name': contact.name,
      'Email': contact.email,
      'Phone': contact.phone,
      'City': contact.city,
      'Qualification': contact.qualification,
      'Message': contact.message,
      'Status': contact.status,
      'Submitted At': contact.submittedAt.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      'IP Address': contact.ipAddress || 'N/A'
    }));

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(data);

    ws['!cols'] = [
      { wch: 25 }, { wch: 20 }, { wch: 30 }, { wch: 15 }, { wch: 15 },
      { wch: 15 }, { wch: 40 }, { wch: 10 }, { wch: 20 }, { wch: 15 }
    ];

    XLSX.utils.book_append_sheet(wb, ws, 'Contacts');

    const exportFile = path.join(EXCEL_DIR, `contacts_export_${Date.now()}.xlsx`);
    XLSX.writeFile(wb, exportFile);

    res.download(exportFile, `contacts_${new Date().toISOString().split('T')[0]}.xlsx`, (err) => {
      fs.unlinkSync(exportFile);
      if (err) {
        console.error('❌ Error exporting file:', err);
      }
    });
  } catch (error) {
    console.error('❌ Error exporting:', error);
    throw error;
  }
};
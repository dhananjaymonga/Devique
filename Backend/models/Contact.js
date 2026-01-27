const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, 'Invalid email format']
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    match: [/^\d{10}$/, 'Phone number must be 10 digits']
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  qualification: {
    type: String,
    required: true,
    enum: ['10th', '12th', 'graduation', 'postgraduation']
  },
  message: {
    type: String,
    required: true,
    trim: true,
    minlength: 10
  },
  status: {
    type: String,
    enum: ['new', 'read', 'replied'],
    default: 'new'
  },
  submittedAt: {
    type: Date,
    default: Date.now
  },
  ipAddress: {
    type: String
  }
});
module.exports = mongoose.model('Contact', contactSchema);

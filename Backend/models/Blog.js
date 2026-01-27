const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  companyName: {
    type: String,
    default: 'Devique Software'
  },
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  subject: {
    type: String,
    required: [true, 'Subject is required'],
    trim: true
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['IT Services', 'Software Company', 'Training', 'Internship', 'Latest Tech Trends']
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  content: {
    type: String,
    required: [true, 'Content is required']
  },
  author: {
    type: String,
    required: [true, 'Author is required']
  },
  device: {
    type: String,
    enum: ['Web', 'Mobile', 'Desktop', 'All Devices', '']
  },
  techStack: {
    type: String
  },
  readTime: {
    type: String
  },
  // Store image as base64 string
  image: {
    data: String,
    contentType: String
  },
  slug: {
    type: String,
    unique: true
  },
  views: {
    type: Number,
    default: 0
  },
  isPublished: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Create slug from title before saving
blogSchema.pre('save', function() {
  if (this.isModified('title')) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }
})

module.exports = mongoose.model('Blog', blogSchema);
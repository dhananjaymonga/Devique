const Blog = require('../models/Blog');

// Create blog
exports.createBlog = async (req, res) => {
  try {
    const {
      companyName, title, subject, category, description,
      content, author, device, techStack, readTime,
      imageData, imageType
    } = req.body;

    if (!title || !subject || !category || !description || !content || !author) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields'
      });
    }

    const blogData = {
      companyName, title, subject, category,
      description, content, author, device, techStack, readTime
    };

    if (imageData && imageType) {
      blogData.image = { data: imageData, contentType: imageType };
    }

    const blog = new Blog(blogData);
    await blog.save();

    res.status(201).json({
      success: true,
      message: 'Blog created successfully',
      data: blog
    });
  } catch (error) {
    console.error('Error creating blog:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// Get all blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const { category, device, page = 1, limit = 10 } = req.query;
    
    const filter = {};
    if (category) filter.category = category;
    if (device) filter.device = device;

    const blogs = await Blog.find(filter)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await Blog.countDocuments(filter);

    res.status(200).json({
      success: true,
      data: blogs,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      total: count
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// Get single blog
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }

    res.status(200).json({
      success: true,
      data: blog
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// Update blog
exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }

    const {
      companyName, title, subject, category, description,
      content, author, device, techStack, readTime,
      imageData, imageType
    } = req.body;

    if (companyName) blog.companyName = companyName;
    if (title) blog.title = title;
    if (subject) blog.subject = subject;
    if (category) blog.category = category;
    if (description) blog.description = description;
    if (content) blog.content = content;
    if (author) blog.author = author;
    if (device) blog.device = device;
    if (techStack) blog.techStack = techStack;
    if (readTime) blog.readTime = readTime;

    if (imageData && imageType) {
      blog.image = { data: imageData, contentType: imageType };
    }

    await blog.save();

    res.status(200).json({
      success: true,
      message: 'Blog updated successfully',
      data: blog
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// Delete blog
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }

    await blog.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Blog deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

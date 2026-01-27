const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/BlogDB';
    
    await mongoose.connect(mongoURI);
    console.log('✅ MongoDB Connected');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    
    // Retry without SSL if first attempt fails
    try {
      const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/BlogDB';
      await mongoose.connect(mongoURI, { tls: false, ssl: false });
      console.log('✅ MongoDB Connected (SSL disabled)');
    } catch (retryError) {
      console.error('❌ Failed to connect to MongoDB:', retryError.message);
      process.exit(1);
    }
  }
};

module.exports = connectDB;
import mongoose from 'mongoose';

const connectDB = async (url) => {
  try {
    await mongoose.connect(url); // No options needed
    console.log('✅ MongoDB connected');
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
    process.exit(1);
  }
};

export default connectDB;

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://akashlimabni:rPoZcf3W7LzZEewJ@cluster0.z6ev8ms.mongodb.net/crud-demo"
    );

    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1); // Exit the application if the connection fails
  }
};

module.exports = connectDB;

const mongoose = require("mongoose");

// Local MongoDB URI
const URI = "mongodb://127.0.0.1:27017/mern_Admin";

// Connect to MongoDB
const connectDb = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDb;

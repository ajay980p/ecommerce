const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const db = await mongoose.connect("mongodb://localhost:27017/e-commerce");
        console.log("db connected");
    } catch (err) {
        console.error("Database Error:", err);
    }
}

connectDB();

module.exports = connectDB;

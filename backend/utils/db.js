//region Imports
const mongoose = require('mongoose');
//endregion

//region Connect Function
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('MongoDB Connection Error:', error);
        process.exit(1); // Stop server if no DB connection
    }
};
//endregion

module.exports = connectDB;

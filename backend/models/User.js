
const mongoose = require('mongoose');


//region User Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
    },
    age: {
        type: Number,
        default: 0
    },
}, {
    timestamps: true
});
//endregion

//region Export Model
const User = mongoose.model('User', userSchema);
module.exports = User;
//endregion

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    dob: { type: Date, required: true },
    role: { type: String, required: true },
    gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    skills: { type: [String], required: true }, // Array of skills
    date: { type: Date, default: Date.now } // Default to current date
});

module.exports = mongoose.model('User', userSchema);

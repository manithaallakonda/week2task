const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    fatherName: String,
    dob: String,
    branch: String,
    rollNo: { type: String, unique: true },
    section: String,
    address: String,
    mobileNo: String,
    password: String,
});

module.exports = mongoose.model('User', userSchema);

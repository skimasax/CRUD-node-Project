const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'Please add your firstname']
    },
    lastname: {
        type: String,
        required: [true, 'Please add your lastname']
    },
    email: {
        type: String,
        required: [true, 'Please add your email'],
        unique: true
    },
    gender: {
        type: String,
        required: [true, 'Please add your gender']
    },
    password: {
        type: String,
        required: [true, 'Please add your password'],
        select:false
    },
    country: {
        type: String,
        required: [true, 'Please add your country']
    }
}, {
    timestamps: true // Corrected the option name
});

module.exports = mongoose.model('User', userSchema); // Corrected the export statement

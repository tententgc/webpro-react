// User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: '',
    },
    role: {
        type: String,
        default: 'user',
    },
    profileImage: {
        type: String,
        default: '',
    },
    viewcount:{ 
        type: Number,
        default: 0,
    },
    followers: {
        type: Array,
        default: [],
    },
},
    { timestamps: true }
);

const UserModel = mongoose.models.User || mongoose.model('User', UserSchema);

module.exports = UserModel;

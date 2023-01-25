const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
}, { timestamps:true })

const UserModel = mongoose.model('Users', UserSchema)

module.exports = UserModel;
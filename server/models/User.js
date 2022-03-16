const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String
    },
	password: String,
    email: {
        type: String
    },
    contact_no: {
        type: String
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    }
	 
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
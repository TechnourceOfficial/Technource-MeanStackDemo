const { response } = require('express')
const User = require('../models/User')
const bcrypt = require("bcrypt");
//list of users
const index = (req, res, next) => {
    User.find().then(response => {
        res.json({
            response
        })
    }).catch(error => {
        res.json({
            message: 'Something Went wrong'
        })
    })
}

// show user details
const show = (req, res, next) => {
    let userID = req.body.userID;
    User.findById(userID).then(response => {
        res.json({
            response
        });
    }).catch(error => {
        res.json({
            message: 'Something Went wrong'
        })
    })
}

//add user data
const store = (req, res, next) => {
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        contact_no: req.body.contact_no,
        age: req.body.age,
        gender: req.body.gender
		
    })
	const salt = await bcrypt.genSalt(10);
	user.password = await bcrypt.hash(req.body.password, salt);
    user.save().then(response => {
        res.json({
            message: 'User Data Added Successfully.'
        })
    }).catch(error => {
        res.json({
            message: 'Something Went wrong'
        })
    })
}

//update user details
const update = (req, res, next) => {
    let userID = req.body.userID;

    let user = {
        name: req.body.name,
        email: req.body.email,
        contact_no: req.body.contact_no,
        age: req.body.age,
        gender: req.body.gender
    }
    User.findByIdAndUpdate(userID, { $set: user }).then(() => {
        res.json({
            message: 'User Data Update Successfully.'
        })
    }).catch(error => {
        res.json({
            message: 'Something Went wrong'
        })
    })
}
//delete user
const destroy = (req, res, next) => {
    let userID = req.body.userID;
    User.findByIdAndRemove(userID).then(() => {
        res.json({
            message: 'User Deleted Successfully.'
        })
    }).catch(error => {
        res.json({
            message: 'Something Went wrong'
        })
    })
}

module.exports = {
    index, show, store, update, destroy
}
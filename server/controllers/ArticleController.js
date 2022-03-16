const response = require('express')
var fs = require('fs');
const Article = require('../models/Article')

//list of articles
const index = async (req, res, next) => {
    await Article.find().then(response => {
        res.json({
            response
        })
    }).catch(error => {
        res.json({
            message: 'Something Went wrong'
        })
    })
}

// show article details
const show = async (req, res, next) => {
    await Article.findById(req.body.articleID).then(response => {
        res.json({
            response
        });
    }).catch(error => {
        res.json({
            message: 'Something Went wrong'
        })
    })
}

//add article data
const store = async (req, res, next) => {
    let article = new Article({
        title: req.body.title,
        description: req.body.description,
        author: req.body.author,
        status: req.body.status
    })
    if (req.file) {
        article.image = req.file.path
    }
    await article.save().then(response => {
        res.json({
            message: 'Article Data Added Successfully.'
        })
    }).catch(error => {
        temp = [];
        for (err in error.errors) {
            console.log(error.errors[err].message)
            temp.push(error.errors[err].message)
        }
        res.json({
            message: temp
        })
    })
}

//update article details
const update = async (req, res, next) => {

    var articleObj = await Article.findById(req.body.articleID)
    let article = {
        title: req.body.title,
        description: req.body.description,
        author: req.body.author,
        status: req.body.status
    }
    if (req.file) {
        fs.unlinkSync(articleObj.image);
        article.image = req.file.path
    }
    await Article.findByIdAndUpdate(req.body.articleID, { $set: article }).then(() => {
        res.json({
            message: 'Article Data Update Successfully.'
        })
    }).catch(error => {
        res.json({
            message: 'Something Went wrong'
        })
    })
}
//delete article
const destroy = async (req, res, next) => {
    await Article.findByIdAndRemove(req.body.articleID).then(() => {
        res.json({
            message: 'Article Deleted Successfully.'
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
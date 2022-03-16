const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    image: {
        type: String,
        required: [false, "Article Image is required"]
    },
    author: {
        type: String,
        required: [true, "Author Name is required"]
    },
    status: {
        type: String,
        enum: ['Active', 'InActive'],
        default: 'Active'
    }
}, { timestamps: true });

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
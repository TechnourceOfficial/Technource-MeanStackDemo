const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const UserRoute = require('./routes/user');
const ArticleRoute = require('./routes/article');
const upload = require('./middleware/upload');
const cors = require('cors'); 
require('dotenv').config();
console.log(process.env.port);
mongoose.connect(process.env.DBCONNSTRING, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', (err) => {
    console.log(err);
});

db.on('open', () => {
    console.log('Database Connected');
});

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(process.env.UPLOADSFOLDER, express.static('uploads'))

const port = process.env.port || 3000;

app.listen(port, () => {
    console.log('Server Running on Port ' + port);
})

app.use('/api/user', UserRoute)
app.use('/api/article', ArticleRoute)
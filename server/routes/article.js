const express = require('express');
const router = express.Router();

const ArticleController = require('../controllers/ArticleController');
const upload = require('../middleware/upload')

router.get('/', ArticleController.index);
router.post('/show', ArticleController.show);
router.post('/store', upload.single('image'), ArticleController.store);
router.post('/update', upload.single('image'), ArticleController.update);
router.post('/delete', ArticleController.destroy);

module.exports = router;
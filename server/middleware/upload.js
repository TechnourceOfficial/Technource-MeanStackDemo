const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/')
    },
    filename: function (req, file, cb) {
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
})

var upload = multer({
    storage: storage,
    fileFilter: function (req, file, callback) {
        if (file.mimetype == "image/jpg" || file.mimetype == "image/png") {
            callback(null, true)
        }
        else {
            console.log('only png or jpg image file supported')
            callback(null, false)
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 2
    }
})

module.exports = upload
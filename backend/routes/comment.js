const express = require('express')
const router = express.Router()
const { isLogged } = require('../middlewares/isLogged')
const storage = require('../config/cloudinary')
const multer = require('multer')

const { createComment , deleteComment , getSingleComment , updateComment, toggleLikeComment } = require('../controllers/comment')

// file upload middleware
const upload = multer({ storage })

router.route('/:id').post(isLogged, upload.single('image') ,createComment).get(isLogged, getSingleComment)
.patch(isLogged, updateComment).delete(isLogged, deleteComment)
router.route('/likes/:id').get(isLogged, toggleLikeComment)

module.exports = router
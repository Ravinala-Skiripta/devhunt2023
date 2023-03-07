const express = require('express')
const router = express.Router()
const { isLogged } = require('../middlewares/isLogged')
const storage = require('../config/cloudinary')
const multer = require('multer')

const { getAllPost , createPost , getPost , updatePost , deletePost, toggleLikePost } = require('../controllers/post')

// file upload middleware
const upload = multer({ storage })

router.route('/').get(isLogged,getAllPost).post(isLogged, upload.array('image', 5), createPost)
router.route('/:id').get(isLogged,getPost).patch(isLogged,updatePost).delete(isLogged,deletePost)
router.route('/likes/:id').get(isLogged, toggleLikePost)

module.exports = router
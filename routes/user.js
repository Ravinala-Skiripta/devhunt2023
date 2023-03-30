const express = require('express')
const router = express.Router()
const { isLogged } = require('../middlewares/isLogged')
const storage = require('../config/cloudinary')
const multer = require('multer')

const { 
    getAllUser, 
    getUser, 
    createUser, 
    updateUser, 
    // deleteUser, 
    userLogin, 
    updateUserPassword,
    uploadProfilePicture
    } 
    = require('../controllers/user')

// Instance of multer
const upload = multer({ storage })

// Laza why we need isLogged when we getUser
router.route('/').get(isLogged, getAllUser).post(createUser)
router.route('/update').patch(isLogged,updateUser)
// router.route('/:matricule').delete(deleteUser)
router.route('/profile').get(isLogged, getUser)
router.route('/login').post(userLogin)
router.route('/update/password').patch(isLogged, updateUserPassword)
router.route('/profile-photo-upload').post(isLogged, upload.single('profile'), uploadProfilePicture),

module.exports = router
const User = require('../models/user')
const { createCustomError } = require('../errors/custom-error')
const bcrypt = require('bcryptjs')
const asyncWrapper = require('../middlewares/async')
const { generateToken } = require('../utils/generarteToken')
// const { normalize } = require('path')

// Get All User from Database
const getAllUser = asyncWrapper (async (req,res,next) => {
    
    const { matricule , firstname , lastname , username } = req.query
    const queryObject = {}
    
    if(matricule){
        queryObject.matricule = Number(matricule)
    }
    if(firstname){
        queryObject.firstname = { $regex : firstname , $options: 'i' }
    }
    if(lastname){
        queryObject.lastname = { $regex : lastname , $options: 'i' }
    }
    if(username){
        queryObject.username = { $regex : username , $options: 'i' }
    }
    
    const user = await User.find(queryObject)

    if(user.length === 0){
        return next(createCustomError("No user found", 404))
    }
    
    res.status(200).json({ user })
})

// Create User
const createUser = asyncWrapper (async (req,res,next) => {
    const { matricule , firstname , lastname , email , username , password , bio } = req.body
    const matriculeFound = await User.findOne({ matricule:matricule})
    const emailFound = await User.findOne({ email:email})
    const usernameFound = await User.findOne({ username:username})

    if (matriculeFound) {
        return next(createCustomError(`matricule ${ matricule } used`,422))
    } else if (emailFound){
        return next(createCustomError(`email ${ email } used`,422))
    } else if (usernameFound){
        return next(createCustomError(`username ${ username } used`,422))
    } else {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        
        if(!hashedPassword){
            return next(createCustomError('Hashing error', 500))    
        }
    
        const user = await User.create({
            matricule,
            firstname,
            lastname,
            email,
            username,
            password: hashedPassword,
            bio
        })
        const token = generateToken(user.matricule, user.email , user._id, user.username)
        
        return res.status(201).json({ message: 'User created successfully', token:token })
    }
})

// Get User
const getUser = asyncWrapper (async (req,res,next) => {
    const user = await User.findOne({ matricule:req.userAuth })

    if(user === null){
        return next(createCustomError( `No user with matricule : ${ req.userAuth }`, 404))   
    }
    res.status(200).json({ user })
})

const updateUser = asyncWrapper (async (req,res,next) => {
    const { email, username , bio} = req.body

    const user = await User.findOne({ matricule:req.userAuth })

    if(user === null) {
        return next(createCustomError(`No user with matricule : ${ req.userAuth }`, 404))
    }

    await User.findOneAndUpdate({ matricule:req.userAuth }, { 
        email: email,
        username: username,
        bio: bio
     })


    res.status(200).json({ message: 'Modification successfull' })
})

const updateUserPassword = asyncWrapper(async( req, res, next) => {
    const { oldPassword , newPassword } = req.body

    const userFound = await User.findOne({ matricule:req.userAuth })
    if(userFound === null){
        return next(createCustomError( `No user with matricule : ${ req.userAuth }`, 404))   
    }

    const isPasswordMatched = await bcrypt.compare(oldPassword , userFound.password)

    if (!isPasswordMatched) {
        return next(createCustomError("Password don't match the old one", 422))
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(newPassword, salt)
    
    if(!hashedPassword){
        return next(createCustomError('Hashing error', 500))    
    }

    await User.findOneAndUpdate({ matricule:req.userAuth }, { 
        password: hashedPassword
    })    
    return res.status(200).json({ message: "User password updated successfully" })
})

// const deleteUser = asyncWrapper(async (req,res,next) => {
//         const { matricule } = req.params
        
//         const userFound = await User.findOne({ matricule:matricule })
//         if(userFound === null){
//             return next(createCustomError( `No user with matricule : ${ matricule }`, 404))   
//         }

//         // if (userFound.id.toString() !== req.id.toString()){
//         //     return next(createCustomError('You are not allowed to delete this user', 403))
//         // }
        
//         await User.findOneAndDelete({ matricule:matricule })
//         res.status(200).json({ message: 'Deletion successfull' })
// })

const userLogin = asyncWrapper(async (req,res,next) => {
    const { matricule, username , email, password } = req.body
    const bodyObject = {}
    if(matricule){
        bodyObject.matricule = Number(matricule)
    }
    if(username){
        bodyObject.username = username
    }
    if(email){
        bodyObject.email = email
    }

    const userFound = await User.findOne(bodyObject)

    if(userFound === null){
        return next(createCustomError("Bad credential", 401))   
    }
    const isPasswordMatched = await bcrypt.compare(password, userFound.password)
    
    if (!isPasswordMatched) {
        return next(createCustomError("Bad credential", 401))
    }

    const token = generateToken(userFound.matricule, userFound.email, userFound._id, userFound.username)
    
    return res.status(200).json({ message: 'Success login user', token:token })

})

const uploadProfilePicture = asyncWrapper(async(req, res, next) => {
    const profileUserUpload = await User.findOne({_id:req.id})
    if(!profileUserUpload){
        return next(createCustomError("User not found", 403))
    }
    if(req.file){
        const userId = req.id

        await User.findOneAndUpdate({_id:userId},{
                profilePicture: req.file.path,
        })
    }
    return res.status(200).json({ message: 'Profile upload'})
})

module.exports = {
    getAllUser,
    getUser,
    createUser,
    updateUser,
    // deleteUser,
    userLogin,
    updateUserPassword,
    uploadProfilePicture,
}
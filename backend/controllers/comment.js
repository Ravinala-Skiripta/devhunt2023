const Post = require('../models/post')
const User = require('../models/user')
const Comment = require('../models/comment')

const { createCustomError } = require('../errors/custom-error')

const asyncWrapper = require('../middlewares/async')
const path = require('path')

const createComment = asyncWrapper(async (req,res,next) => {
    const { id } = req.params
    
    if(id.length != 24){
        return next(createCustomError( `Bad ID patterns`, 400))   
    }
    const { description } = req.body
    if(!description){
        return next(createCustomError( `No descritpion`, 403))
    }

    const post = await Post.findOne({ _id:id })
    const user = await User.findOne({ matricule:req.userAuth })
    if(post === null){
        return next(createCustomError( `No post with ID : ${ id }`, 404))   
    }

    const comment = await Comment.create({
        post: post._id,
        description,
        user: req.id,
        photo: req?.file?.path
    })

    post.comments.push(comment._id)
    user.comments.push(comment._id)

    await post.save()
    await user.save()

    res.status(200).json({ comment })
})

const getSingleComment = asyncWrapper(async (req,res,next) => {
    const { id } = req.params
    
    if(id.length != 24){
        return next(createCustomError( `Bad ID patterns`, 400))   
    }
    const comment = await Comment.findOne({ _id:id }).populate('user')

    if(comment === null){
        return next(createCustomError( `No comment with ID : ${ id }`, 404))   
    }
    res.status(200).json({ comment })
})

const updateComment = asyncWrapper(async (req,res,next) => {
    const { description } = req.body
    const { id } = req.params
    
    if(id.length != 24){
        return next(createCustomError( `Bad ID patterns`, 400))   
    }

    const comment = await Comment.findOne({ _id:id })

    if(comment === null){
        return next(createCustomError( `No comment with ID : ${ id }`, 404))   
    }

    if (comment.user.toString() !== req.id.toString()){
        return next(createCustomError('You are not allowed to update this post', 403))
    } 

    await Comment.findOneAndUpdate({ _id:id }, {
        description,
    })

    res.status(200).json({ message: 'Modification successfull' })
})

const deleteComment = asyncWrapper(async (req,res,next) => {
    const { id } = req.params
    
    if(id.length != 24){
        return next(createCustomError( `Bad ID patterns`, 400))   
    }

    const comment = await Comment.findOne({ _id:id })

    if(comment === null){
        return next(createCustomError( `No comment with ID : ${ id }`, 404))   
    }

    if (comment.user.toString() !== req.id.toString()){
        return next(createCustomError('You are not allowed to delete this post', 403))
    } 

    await Comment.findOneAndDelete({ _id:id })

    res.status(200).json({ message: 'Deletion successfull' })

})

const toggleLikeComment = asyncWrapper(async(req, res, next) => {

    const { id } = req.params
    if(id.length != 24){
        return next(createCustomError( `Bad ID patterns`, 400))   
    }
    const comment = await Comment.findOne({_id:id})

    if(comment === null){
        return next(createCustomError( `No comment with ID : ${ id }`, 404))   
    }


    const isLiked =  comment.likes.includes(req.id)

    if (isLiked) {
      comment.likes = comment.likes.filter(
        like => like.toString() !== req.id.toString()
      );
      await comment.save();
    } else {

      comment.likes.push(req.id);
      await comment.save();
    }
    res.json({
      status: "success",
      data: comment,
    });
})

module.exports = {
    createComment,
    getSingleComment,
    updateComment,
    deleteComment,
    toggleLikeComment
}


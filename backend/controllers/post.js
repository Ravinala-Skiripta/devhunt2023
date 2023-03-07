const Post = require('../models/post')
const User = require('../models/user')

const { createCustomError } = require('../errors/custom-error')

const asyncWrapper = require('../middlewares/async')
const path = require('path')

const getAllPost = asyncWrapper(async (req,res,next) => {
    const { search } = req.query
    if(!search){
        const posts = await Post.find().populate('comments user')
        return res.status(200).json({ posts })

    }
    const searchSplited = search.split(" ").map(mot => mot.toLowerCase())

    const posts = await Post.find({ hashtag: { $in : searchSplited} }).populate('comments user')
    res.status(200).json({ posts })
})

const createPost = asyncWrapper(async (req,res,next) => {
    const { description, hashtag } = req.body
    
    const hashtagClean = ((mot) => {
        return mot.replace(/\s/g, "").split("#").filter(mot => mot !== "").map(mot => mot.toLowerCase());
    })

    if(!hashtag){
        return next(createCustomError( `Hashtag required`, 403))   
    }
    
    const tabHashtag = hashtagClean(hashtag)

    const getPath = req?.files?.map((object)=> {
             return object.path
    })

    const user = await User.findOne({ matricule:req.userAuth })
    const post = await Post.create({
        description,
        user: user._id,
        photo: getPath,
        hashtag: tabHashtag,
    })
    
    user.posts.push(post._id)

    await user.save()

    res.status(201).json({ post })
})

const getPost = asyncWrapper(async (req,res,next) => {
    const { id } = req.params

    if(id.length != 24){
        return next(createCustomError( `Bad ID patterns`, 400))   
    }
    const post = await Post.findOne({ _id:id }).populate('comments user')

    if(post === null){
        return next(createCustomError( `No post with ID : ${ id }`, 404))   
    }
    res.status(200).json({ post })
})

const updatePost = asyncWrapper(async (req,res,next) => {
    const { description } = req.body
    const { id } = req.params
    
    if(id.length != 24){
        return next(createCustomError( `Bad ID patterns`, 400))   
    }
    const post = await Post.findOne({ _id:id })

    if(post === null){
        return next(createCustomError( `No post with ID : ${ id }`, 404))   
    }

    if (post.user.toString() !== req.id.toString()){
        return next(createCustomError('You are not allowed to update this post', 403))
    }

    await Post.findByIdAndUpdate({ _id:id }, {
        description,
    })

    res.status(200).json({ message: 'Modification successful' })
})

const deletePost = asyncWrapper(async (req,res,next) => {
    
    const { id } = req.params
    if(id.length != 24){
        return next(createCustomError( `Bad ID patterns`, 400))   
    }

    const post = await Post.findOne({ _id:id })

    if(post === null){
        return next(createCustomError( `No post with ID : ${ id }`, 404))   
    }

    if (post.user.toString() !== req.id.toString()){
        return next(createCustomError('You are not allowed to delete this post', 403))
    }

    await Post.findByIdAndDelete({ _id:id })
    res.status(200).json({ message:'Post deleted' })
})

const toggleLikePost = asyncWrapper(async(req, res, next) => {
    //1. Get the post
    const { id } = req.params
    if(id.length != 24){
        return next(createCustomError( `Bad ID patterns`, 400))   
    }
    const post = await Post.findOne({_id:id})

    if(post === null){
        return next(createCustomError( `No post with matricule : ${ id }`, 404))   
    }

    //2. Check if the user has already liked the post
    const isLiked = post.likes.includes(req.id)
    //3. If the user has already liked the post, unlike the post
    if (isLiked) {
      post.likes = post.likes.filter(
        like => like.toString() !== req.id.toString()
      );
      await post.save();
    } else {
      //4. If the user has not liked the post, like the post
      post.likes.push(req.id);
      await post.save();
    }
    res.json({
      status: "success",
      data: post,
    });
})

module.exports = {
    getAllPost,
    createPost,
    getPost,
    updatePost,
    deletePost,
    toggleLikePost
}
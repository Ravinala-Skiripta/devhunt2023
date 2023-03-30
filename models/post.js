const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    hashtag:{
        type: Array,
        required:[true, 'Hashtag required'],
        trim:true,
    },
    description: {
        type: String,
        required: [true, 'Description required']
    },
    likes:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
        }
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Author is required']
    },
    photo: [{
        type: String,
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
    }],
},
{  
    timestamps: true,
    toJSON: { virtuals: true }
}
)

//add likes count as virtual field
PostSchema.virtual("likesCount").get(function () {
    return this.likes.length;
  });

module.exports = new mongoose.model('Post', PostSchema)
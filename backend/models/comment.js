const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: [true, 'Post is required']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User is required']
    },
    description: {
        type: String,
        require: [true, 'Comment description is required']
    },
    likes:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    
    photo: {
        type: String,
    }
},
{
    timestamps: true,
    toJSON: { virtuals: true }
}
)

CommentSchema.virtual("likesCount").get(function () {
    return this.likes.length;
});

module.exports = new mongoose.model ('Comment', CommentSchema)

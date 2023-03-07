const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    matricule:{
        type: Number,
        required:[true, 'Matricule number required']
    },
    firstname:{
        type: String,
        maxlength:20,
        trim: true
    },
    lastname: {
        type: String,
        required: [true, 'lastname required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'email required'],
        unique: [true, 'email used'],
        trim: true, 
        match: [/\S+@\S+\.\S+/, 'enter a valid email']
    },
    username: {
        type: String,
        required: [true, 'username required'],
        trim: true
    },
    password: {
        type: String,
        required: [true, 'password required'],
        minlength: [8, '8 characters minimum'],
        maxlength: [64, '64 characters maximum']
    },
    profilePicture: {
        type: String,
    },
    bio: {
        type: String,
        maxlength: [150, '150 characters maximum']
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
},
{
    timestamps: true,
    toJSON: { virtuals: true }
}
)

UserSchema.virtual('fullname').get(function() {
    return `${this.firstname} ${this.lastname}`
})

UserSchema.virtual('postCounts').get(function() {
    return this.posts.length
})

module.exports = new mongoose.model('User', UserSchema)
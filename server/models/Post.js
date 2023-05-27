const mongoose = require('mongoose');

// post is edit schema soon 

const PostSchema = new mongoose.Schema(
    {
        userId: { 
            type: String, 
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
            unique: true,
        },
        desc: {
            type: String,
            required: true,
        },
        photo: {
            type: String,
            required: false,
        },
        categories: {
            type: Array,
            required: false,
        }, 
        likes: {
            type: Number,
            default: 0,
        },
        comments: {
            type: Array,
            default: [],
        },
    }
    , { timestamps: true });

const PostModel = mongoose.models.Post || mongoose.model('Post', PostSchema);
module.exports = PostModel;
const { ObjectID } = require('mongodb');
const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title:
    {
        type: String,
        require : true
    },
    type:
    {
        type: String,
        require : true
    },
    content:
    {
        type: String,
        require : true
    },
    userid: [{ type: mongoose.Schema.Types.ObjectId, ref:'User' }]
    },
    {
    timestamps: true
    });
module.exports = mongoose.model('Post', postSchema, "posts");


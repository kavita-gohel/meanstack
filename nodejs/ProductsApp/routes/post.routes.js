
const express = require('express')
const post = require('../controllers/post.controller');
const postValidation = require('../validation/post.validation');
const router = express.Router();
    
    router.post('/user/post', postValidation.add, post.add);
    router.get('/user/viewPost/:userid', post.getPost);
    router.put('/user/editPost/:_id',postValidation.updatePost, post.updatePost);
    router.delete('/user/deletePost/:_id', post.deletePost);
module.exports = router;
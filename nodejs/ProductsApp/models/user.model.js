const mongoose = require('mongoose');
// var bcrypt = require('bcrypt');


const userSchema = mongoose.Schema({
    fname:
    {
        type: String,
        require : true
    },
    lname:
    {
        type: String,
        require : true
    },
    email:{
        type: String,
        require : true
    },
    password:{
        type: String,
        require : true
    },
    mono: {
        type: String,
        require : true
    },
    gender: {
        type: String,
        require : true
    },
    hobby : {
        type: Array,
        require : true
    },
    photo:{
        type: String,
        require : true
    },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref:'Post' }]
    }, 
    {
    timestamps: true
    });





// const jwt = mongoose.Schema({
//     email: String,
//     password: String
//     },
//     {
//         timestamps: true
// })

// userSchema.statics.hashPassword = function hashPassword(password){
//     return bcrypt.hashSync(password,10);
// }

// userSchema.methods.isValid = function(hashedpassword){
//     return  bcrypt.compareSync(hashedpassword, this.password);
// }
module.exports = mongoose.model('User', userSchema)
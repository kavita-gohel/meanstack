const mongoose = require('mongoose');
const multer = require('multer');
const express = require('express');
const router = express.Router();
var upload = multer({dest: './uploads'});
const user = require('../controllers/user.controller');
const userValidation = require('../validation/user.validation');
const jwtToken = require('../services/jwt.services');
const { route } = require('./post.routes');
     
    
     // router.post('/user',user.create);
     router.post('/user',userValidation.create, upload.single('photo'), user.create); 
     router.post('/',user.login);
     router.get('/user', jwtToken.findAll, user.findAll);
     router.get('/user/:_id', user.findOne);   
     router.put('/user/:_id', userValidation.update, user.update);
     router.delete('/user/:_id', user.delete);


     // Multer File upload settings
const DIR = './uploads/';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, fileName)
    }
});


// Multer Mime Type Validation
var upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});







module.exports = router;

// // var upload = multer({ dest: 'uploads/' });
// module.exports = (app) => {
//     const user = require('../controllers/user.controller.js');


//     // Create a new User
//      app.post('/user',user.create);
// //     app.post('/user',upload.single('photo'), function(req, res){
// //      user.create(req,res);
// //      });
//     app.post('/',user.login);
//     // Retrieve all User
//      app.get('/user', user.findAll);

// //     // Retrieve a single User with name
// //     app.get('/user/:fname', user.findOne);
//      app.get('/user/:_id', user.findOne);    

// //     // // Update a User with _Id
//        app.put('/user/:_id', user.update);

// //     // // Delete a User with _Id
//      app.delete('/user/:_id', user.delete);
// }
//     // app.delete('/user/:fname', user.delete);

//            // const fileFilter = (req, file, cb) => {
//         // if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
//         //     cb(null, true);
//         // } else {
//         //     cb(null, false);
//         // }
//         // }
//         // app.post('/user',upload.single('photo'),(req,res,next)=>{
//         //     console.log("create route file..",req)
         

//     //  app.post('/user/img',upload.single('photo'), function(req, res){
//     //      user.upload(req,res);
//     //  });
//      // app.get('/user',upload.single('photo'), function(req, res){
//      //      res.send('uploads/')
//      //  });

// //     app.post('/imgs',upload.array('photos',100), function(req, res){
// //      user.uploads(req,res);
// //      });
//     // app.post('/user/img',upload.single('photo'),(req, res) => {
//     // if (!req.file) {
//     //     console.log("No file received");
//     //     return res.send({
//     //       success: false
//     //     });
    
//     //   } else {
//     //     console.log('file received');
//     //     return res.send(req.file)
//     //   }
//     //  });

//     // app.post('/user/:_id', user.photo);
  
//     // const storage = multer.diskStorage({
//     //     destination: function(req, file, cb){
//     //          cb(null, 'uploads')
//     //     },
//     //     filename: function(req, file, cb){
//     //          cb(null, new Date().toISOString() + file.originalname)
//     //     }
//     // })
//     // const imageFilter = function (req, file, cb) {
//     //     if(file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg")  {
//     //         cb(null, true)
//     //        }else{
//     //       cb(null, false)
//     //        }
//     // }
//     // const upload = multer({storage: storage, 
//     //     fileFilter: imageFilter
//     // })
    
  
//     // ,(req,res,next)=>{
    
//     //     const url = req.protocol + '://' + req.get('host')
     
//     //    console.log(req.body.quantity);
//     //     // console.log('hello url are set',);
//     //       // console.log(req.body);
//     //     //  console.log('check heare',req.body);
//     //         // const userObj = {
             
//     //               User.photo=  url+"/uploads/"+req.file.filename
                   
//     //         // };
//     //         // let Product =new productsmodel(userObj);
//     //         //  console.log('product details found or not',userObj);
        
//     //             User.save((err,result)=>{
//     //                console.log('photo add or not check')
//     //                 if(err){
//     //                     return res.json({"message":err})
//     //                 }
//     //                 console.log('new photo response check',result)
//     //                   return res.json({
//     //                       "message":"photo add sucessfully",
//     //                       "photo":photo
//     //                   })
//     //                 // resolve(newproduct)
//     //             //   console.log(err)
//     //            })
//     //         // })
//             // return res.json({message:"data uploaded sucess"});
//         // })
    
    
    
    
    
    
    
    





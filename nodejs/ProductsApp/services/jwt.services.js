const jwt = require("jsonwebtoken");
/**
 * Function To Validation Of JWT Token
 * @param {authorization} - AccessToken
 * @returns {User} - Decoded User Detail
 */         

module.exports.findAll = async (req,res, next) => {
     console.log("req.headers",req.headers);
    const authorization  = req.cookies.auth;
    return new Promise(async (resolve, reject) => {
        // console.log("authorization value...",authorization);
        if (authorization && authorization !== "" && authorization) {
            jwt.verify(authorization, 'secret', (err, decoded) => {
                if (err) {
                    console.log("error at failed to authentication",err);
                    reject({ status: false, message: "Failed to authenticate token."});
                } else {
                    req.user = decoded;
                    console.log("decoded =========++> ", decoded);
                    resolve({ status: true, user: decoded });
                }
            });
        } else {
            console.log("error..");
            reject({ status: false, message: "You Need To Login First"});
        }
    })
    .then(({ status, message, user }) => {
        console.log(status,"success", user)
        next();
        // res.status(200).json({ status, message});
        // req.user = (status) ? user : null;
        // (status) ? next() : res.status(200).json({ status, message, user });
    }).catch(({ status, message }) => {
        res.status(401).json({ status, message });
    })
}

// module.exports.findOne = async (req,res, next) => {
//     console.log("req.headers",req.headers);
//    const authorization  = req.cookies.auth;
//    return new Promise(async (resolve, reject) => {
//        // console.log("authorization value...",authorization);
//        if (authorization && authorization !== "" && authorization) {
//            jwt.verify(authorization, 'secret', (err, decoded) => {
//                if (err) {
//                    console.log("error at failed to authentication",err);
//                    reject({ status: false, message: "Failed to authenticate token."});
//                } else {
//                    req.user = decoded;
//                    console.log("decoded =========++> ", decoded);
//                    resolve({ status: true, user: decoded });
//                }
//            });
//        } else {
//            console.log("error..");
//            reject({ status: false, message: "You Need To Login First"});
//        }
//    })
//    .then(({ status, message, user }) => {
//        console.log(status,"success", user)
//        next();
//        // res.status(200).json({ status, message});
//        // req.user = (status) ? user : null;
//        // (status) ? next() : res.status(200).json({ status, message, user });
//    }).catch(({ status, message }) => {
//        res.status(401).json({ status, message });
//    })
// }

// module.exports.update = async (req,res, next) => {
//     console.log("req.headers",req.headers);
//    const authorization  = req.cookies.auth;
//    return new Promise(async (resolve, reject) => {
//        // console.log("authorization value...",authorization);
//        if (authorization && authorization !== "" && authorization) {
//            jwt.verify(authorization, 'secret', (err, decoded) => {
//                if (err) {
//                    console.log("error at failed to authentication",err);
//                    reject({ status: false, message: "Failed to authenticate token."});
//                } else {
//                    req.user = decoded;
//                    console.log("decoded =========++> ", decoded);
//                    resolve({ status: true, user: decoded });
//                }
//            });
//        } else {
//            console.log("error..");
//            reject({ status: false, message: "You Need To Login First"});
//        }
//    })
//    .then(({ status, message, user }) => {
//        console.log(status,"success", user)
//        next();
//        // res.status(200).json({ status, message});
//        // req.user = (status) ? user : null;
//        // (status) ? next() : res.status(200).json({ status, message, user });
//    }).catch(({ status, message }) => {
//        res.status(401).json({ status, message });
//    })
// }
// module.exports.delete = async (req,res, next) => {
//     console.log("req.headers",req.headers);
//    const authorization  = req.cookies.auth;
//    return new Promise(async (resolve, reject) => {
//        // console.log("authorization value...",authorization);
//        if (authorization && authorization !== "" && authorization) {
//            jwt.verify(authorization, 'secret', (err, decoded) => {
//                if (err) {
//                    console.log("error at failed to authentication",err);
//                    reject({ status: false, message: "Failed to authenticate token."});
//                } else {
//                    req.user = decoded;
//                    console.log("decoded =========++> ", decoded);
//                    resolve({ status: true, user: decoded });
//                }
//            });
//        } else {
//            console.log("error..");
//            reject({ status: false, message: "You Need To Login First"});
//        }
//    })
//    .then(({ status, message, user }) => {
//        console.log(status,"success", user)
//        next();
//        // res.status(200).json({ status, message});
//        // req.user = (status) ? user : null;
//        // (status) ? next() : res.status(200).json({ status, message, user });
//    }).catch(({ status, message }) => {
//        res.status(401).json({ status, message });
//    })
// }

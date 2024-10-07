// const { JWT_SECRET } = require("./config");
// const jwt = require("jsonwebtoken");

// const authMiddleware = (req, res, next) => {
//     const authHeader = req.headers.authorization;

//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//         return res.status(403).json({});
//     }

//     const token = authHeader.split(' ')[1];

//     try {
//         const decoded = jwt.verify(token, JWT_SECRET);

//         if(decoded.userId){
//             req.userId= decoded.userId;
//             next()
//         }else{
//             res.status(411).json({});
//         }
//     } catch (err) {
//         return res.status(403).json({});
//     }
// };

// module.exports = {
//     authMiddleware
// }


const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('./config')

const authMiddleware = async(req, res, next)=>{
    const authHeader = req.headers.authorization
    // console.log(authHeader)

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(403).json({});
    }

    // split the token from space to verify it 
    const token = authHeader.split(' ')[1]

    try {
        const decoded = jwt.verify(token, JWT_SECRET)

         req.userId = decoded.userId;

        next();
        //  if(decoded.userId){
        //     req.userId = decoded.userId;
        //     next();
        //  }else{
        //     res.status(411).json({})
        //  }
    } catch (error) {
        console.log(error)
        return res.status(403).json({})
    }
}

module.exports = {
    authMiddleware
}

const jwt=require('jsonwebtoken')
const {User}=require('../models/userModel')
const asyncHandler=require('express-async-handler')

const protect=asyncHandler(async(req,res,next)=>{
    let token;

    if(
        req.headers.authorization&&
        req.headers.authorization.startsWith('Bearer')
    ){
        try {
            token=req.headers.authorization.split(" ")[1];
            // Bearer sfargergrer

            // decodes token id
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.user=await User.findById(decoded.id).select("-password");
            
            next();
        } catch (error) {
            res.status(401);
            throw new Error("Not authorized, token failed");
        }

        if(!token){
            res.status(401);
            throw new Error("Not authorized, no token")
        }
    }
})


module.exports={protect}

// const jwt = require('jsonwebtoken');
// const {User} = require('../models/userModel');
// const asyncHandler = require('express-async-handler');

// const protect = asyncHandler(async (req, res, next) => {
//     let token;

//     if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
//         try {
//             // Extract the token from the authorization header
//             token = req.headers.authorization.split(' ')[1];

//             // Verify the token using the secret
//             const decoded = jwt.verify(token, process.env.JWT_SECRET);

//             // Fetch the user details using the decoded user ID from the token
//             req.user = await User.findById(decoded.id).select('-password');

//             // Continue to the next middleware or route handler
//             next();
//         } catch (error) {
//             // If an error occurs during token verification, send a 401 Unauthorized response
//             res.status(401).json({ message: 'Not authorized, token failed', stack: error.stack });
//         }
//     } else {
//         // If no token is provided in the request header, send a 401 Unauthorized response
//         res.status(401).json({ message: 'Not authorized, no token' });
//     }
// });

// module.exports = { protect };
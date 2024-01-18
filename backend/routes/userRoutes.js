const express=require('express')
const { registerUser, authUser, allUsers }=require('../controllers/userControllers');
const { protect } = require('../middlewares/authMiddleware');
const router=express.Router();

router.route('/').post(registerUser).get(protect,allUsers)
router.route('/login').post(authUser)

module.exports=router


// const express=require("express");
// const { registerUser, authUser }=require("../controllers/userControllers")


// const userRoutes =express.Router();
// // userRoutes.post('/register', registerUser)
// userRoutes.route('/').post(registerUser)

// userRoutes.post('/login',authUser)

// module.exports = userRoutes
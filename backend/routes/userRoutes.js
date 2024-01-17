const express=require("express");
const { registerUser, authUser }=require("../controllers/userControllers")


const userRoutes =express.Router();

userRoutes.route('/').post(registerUser)

userRoutes.post('/login',authUser)

module.exports = userRoutes
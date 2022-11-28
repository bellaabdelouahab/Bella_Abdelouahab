const express=require('express')
const router=express.Router();
const { user } = require("../controllers/loginController");





const User = require('../models/user/userModel');


const ErrorHandler = (err)=>{
    var errors = {}
    if(err.message.includes('User validation failed')){
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path]=properties.message;
        })
        // duplicate key error
        
    }
    if(err.code===11000){
        errors.username="Username already exists"
    }
    return errors;
}




const login = async(req, res) => {
    if(req.session.user){
        res.redirect('/');
    }
    // render login page
    res.render('login');
}

const loginpost = async(req, res) => {
    try{
        const user = await User.login(req.body.username,req.body.password)
        // store user in session
        req.session.user = user;
        res.status(200).redirect('/');
    }
    catch(err){
        res.render('login',{error:err.message});
    }
}
const logout = async(req, res) => {
    
}

module.exports= {
    login,
    loginpost,
    logout,
}


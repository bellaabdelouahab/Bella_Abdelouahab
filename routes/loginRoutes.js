const express=require('express')

const  {login,    loginpost,    logout,}  = require("../controllers/loginController");
const router=express.Router();

router.get('/login',login)
router.post('/login',loginpost)
router.get('/logout',logout)

module.exports=router

//requirements
const express = require('express')
const session = require('express-session')
require('dotenv').config()
const app=express();

//utiliser les middleware nissecaires
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true
  }))

 
//Definition des routes 
app.use(require('./routes/postRoutes'))
app.use(require('./routes/loginRoutes'))


module.exports=app
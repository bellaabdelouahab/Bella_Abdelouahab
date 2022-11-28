
//requirements
const express = require('express')


const app=express();

//utiliser les middleware nissecaires
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))



//Definition des routes 
app.use(require('./routes/postRoutes'))


module.exports=app
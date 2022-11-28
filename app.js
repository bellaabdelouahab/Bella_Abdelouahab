
//requirements
const express = require('express')


const app=express();

//utiliser les middleware nissecaires


//Definition des routes 
app.get('/',(req,res)=>{
    res.send('hello world')
})


module.exports=app
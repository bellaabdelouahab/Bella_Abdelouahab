//requirements
const app = require('./app')
const db=require('mongoose')

//dfinition du moteur de template
app.set('view engine', 'pug')

// Etablire une connexion à la base de données
db.connect(process.env.DB_URI,{useNewUrlParser:true})

//Démarage du serveur su le le port : PORT dans .env
const server = app.listen(process.env.PORT || 3000,()=>{
    console.log('api listeningat : http://localhost:3000') 
    
})
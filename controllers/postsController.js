const pug = require('pug');
const Post=require("../models/post/postModel")

async function getPosts(req,res){
   //Recupérer tous les posts dans myBlogdb et envoyer index.pug au client
   const posts=await Post.find()
    // get current user authenticated
    const user = req.session.user;
    res.render("index",{posts,user})
}
 

async function getPost(req,res){
    //Recupérer un post definie par son _id dans myBlogdb et envoyer post.pug au client
}

async function makePost(req,res){
    // renvoyer au client editPost.pug
    res.render("editPost")
}
async function addPost(req,res){
   //Créer un nouveau post dans myBlogdb et rediriger le client vers /
   const post=await Post.create(req.body)
    res.redirect("/")
}
async function editPost(req,res){
    //Recupérer un post definie par son _id et renvoyer au client editPost.pug avec les donnée de ce post
    const post=await Post.findById(req.params.id)
    console.log(req.params.id);
    res.render("editPost",{post})
}
async function updatePost(req,res){
    //metre à jour un post et rediriger le client vers ce post
}

async function deletePost(req,res){
    //Suprimer un post et rediriger le client vers /
} 

module.exports={getPosts,getPost,makePost,addPost,updatePost,editPost,deletePost}
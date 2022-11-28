const express=require("express")
const {getPosts,getPost,makePost,addPost,updatePost,editPost,deletePost }=require("../controllers/postsController")

const router=express.Router();

// les routes post
router.get("/",getPosts)
router.get("/post/new",makePost)
router.post("/",addPost)
router.get("/post/:id",getPost)
router.get("/post/edit/:id",editPost)
router.post("/post/update/:_id",updatePost)
router.get("/post/delete/:id",deletePost)

module.exports=router
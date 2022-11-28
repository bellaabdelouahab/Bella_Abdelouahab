const express=require("express")
const {getPosts,getPost,makePost,addPost,updatePost,editPost,deletePost }=require("../controllers/postsController")

const isAuthenticated = (req, res, next)=> {
    if (req.session.user) next()
    else {
        res.redirect('/login');
    }
}


const router=express.Router();

// les routes post
router.get("/",isAuthenticated,getPosts)
router.get("/post/new",isAuthenticated,makePost)
router.post("/",isAuthenticated,addPost)
router.get("/post/:id",isAuthenticated,getPost)
router.get("/post/edit/:id",isAuthenticated,editPost)
router.post("/post/update/:_id",isAuthenticated,updatePost)
router.get("/post/delete/:id",isAuthenticated,deletePost)

module.exports=router
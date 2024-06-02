const Posts = require('../models/posts.model');

const getAllpots = async (req, res, next) =>{
    const [result] = await Posts.selectPosts();

    res.json(result);
}

const getPostsById = async (req, res) =>{
    try{
        const [result] = await Posts.selectById(req.params.posts_id);
        if ( result.length === 0) res.status(404).json({fatal:'Post no encontrado'});
        res.json(result[0]);
    }catch (err){
        next(err);
    }

}

const createposts = async (req, res) => {
   const [result] = await Posts.insertPosts(req.body);
   res.json(result);

}

module.exports={
    getAllpots, createposts, getPostsById
}
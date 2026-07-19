const PostModel = require('../models/post');


exports.addPost = async(req, res) => {
    try{
        const  { desc, imageLink } = req.body;
        let userId = req.user._id;

        const addPost = new PostModel({ user: userId, desc, imageLink });

        if(!addPost){
            return res.status(400).json({ message: 'Failed to create post' });
        }
        await addPost.save();
        return res.status(200).json({ 
            message: 'Post created successfully',
            post: addPost
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.likeDislikePost = async(req, res) => {
    try{
        let selfId = req.user._id;
        let { postId } = req.body;
        let post = await PostModel.findById(postId);
        if(!post){
            return res.status(400).json({ message: 'Post not found' });
        }
        const index = post.likes.findIndex(id => id.equals(selfId));

        if(index !== -1){
            // User already liked the post, remove like
            post.likes.splice(index, 1);
        } else {
            // User didn't like the post, add like
            post.likes.push(selfId);
        }
        
        await post.save();
        return res.status(200).json({ 
            message: index !== -1 ? 'Post unliked' : 'Post liked',
            likes: post.likes
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

exports.getAllPost = async(req, res) => {
    try{
        let posts = await PostModel.find().sort({ createdAt: -1 }).populate("user","-password");
        return res.status(200).json({ 
            message: 'Posts fetched successfully',
            posts
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

exports.getPostById = async(req, res) => {
    try{
        const {postId} = req.params;
        const post = await PostModel.findById(postId).populate("user","-password");
        if(!post){
            return res.status(400).json({ message: 'Post not found' });
        }
        return res.status(200).json({ 
            message: 'Data fetched successfully',
            post: post
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

exports.getTop5PostForUser = async(req, res) => {
    try{
        const {userId} = req.params;
        const posts = await PostModel.find({ user: userId }).sort({ createdAt: -1 }).limit(5).populate("user","-password");
        return res.status(200).json({ 
            message: 'Data fetched successfully',
            posts: posts
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

exports.getAllPostForUser = async(req, res) => {
    try{
        const {userId} = req.params;
        const posts = await PostModel.find({ user: userId }).sort({ createdAt: -1 }).populate("user","-password");
        return res.status(200).json({ 
            message: 'Data fetched successfully',
            posts: posts
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
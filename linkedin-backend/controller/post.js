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

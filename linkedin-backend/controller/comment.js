const CommentModel = require('../models/comment');
const PostModel = require('../models/post');
const NotificationModal = require('../models/notification');


exports.commentPost = async(req, res) => {
    try{
        const {postId, comment} = req.body;
        const userId = req.user._id;

        const postExist = await PostModel.findById(postId).populate('user');
        if(!postExist){
            return res.status(400).json({ error: 'Post not found' });
        }
        
        postExist.comments = postExist.comments + 1;
        await postExist.save();

        const newComment = new CommentModel({ user:userId, post:postId, comment });
        await newComment.save();

        const populatedComment = await CommentModel.findById(newComment._id).populate('user','f_name headline profilePic');

        const content = `${req.user.f_name} has comment on your post`;

        const notification = new NotificationModal({sender:userId,receiver:postExist.user._id,content,type:'comment',postId:postId.toString()});
        await notification.save();
        
        return res.status(200).json({
            message: "Commented successfully",
            comment: populatedComment
        })



    }catch(err){
        console.error(err);
        res.status(500).json({ error: 'Server error',message:err.message });
    }
};

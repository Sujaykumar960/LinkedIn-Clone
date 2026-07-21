


exports.commentPost = async(req, res) => {
    try{

    }catch(err){
        console.error(err);
        res.status(500).json({ error: 'Server error',message:err.message });
    }
};

const MessageModal = require('../models/message');


exports.sendMessage = async(req, res) => {
    try{
        let { conversation, message, picture } = req.body;
        let addMessage = new MessageModal({ sender: req.user._id, conversation, message, picture });
        await addMessage.save();
        let populatedMessage = await addMessage.populate('sender');
        return res.status(200).json(populatedMessage);

    } catch(err){
        console.log(err);
        return res.status(500).json({ error: 'Server error', message: err.message || 'Unknown error' });
    }
}
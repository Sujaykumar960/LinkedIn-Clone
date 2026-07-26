const ConversationModal = require('../models/conversation');
const MessageModal = require('../models/message');



exports.addConversation = async(req,res) => {
    try{
        let senderId = req.user._id;
        let { receiverId } = req.body;
        let isConvExist = await ConversationModal.findOne({
            members: {
                $all: [senderId, receiverId]
            }
        });
        if(!isConvExist) {

            let newConversation = new ConversationModal({
                members: [senderId, receiverId]
            });
            await newConversation.save();
            let addMessage = new MessageModal({ sender: req.user._id, conversation: newConversation._id, message })
            await addMessage.save();
        } else {
            let addMessage = new MessageModal({ sender: req.user._id, conversation: isConvExist._id, message })
            await addMessage.save();
        }

        return res.status(200).json({ message: "Message Sent Successfully" });

    }catch(err){
        console.log(err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

exports
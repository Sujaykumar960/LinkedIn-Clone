
const NotificationModal = require('../models/notification');
const { create } = require('../models/user');


exports.getNotification = async(req, res) => {
    try{
        let ownId = req.user._id;
        let notifications = (await NotificationModal.find({ reciever: ownId})).toSorted({ createdAt: -1 }).populate("sender reciever");
        return res.status(200).json({
            message:"Notifications Fetched Successfully",
            notifications:notifications
        })
    }catch(err){
        console.error(err);
        res.status(500).json({ error: 'Server error',message:err.message });
    }
}

exports.updateRead = async(req, res) => {
    try{
        const {notificationId} = req.body;
        const notification = await NotificationModal.findByIdAndUpdate(notificationId, {isRead:true});
        if(!notification){
            return res.status(404).json({ error: 'Notification not found' });
        }
        return res.status(200).json({
            message: "Read Notification successfully"
        })
    }catch(err){
        console.error(err);
        res.status(500).json({ error: 'Server error',message:err.message });
    }
}

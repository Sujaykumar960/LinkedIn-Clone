
const NotificationModal = require('../models/notification')



exports.getNotification = async(req, res) => {
    try{

    }catch(err){
        console.error(err);
        res.status(500).json({ error: 'Server error',message:err.message });
    }
}
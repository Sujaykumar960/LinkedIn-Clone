const User = require('../models/user');
const bcryptjs = require('bcryptjs');


exports.register = async (req, res) => {
    try{
        let {email, password, f_name} = req.body;
        let isUserExist = await User.findOne({email:email});
        if(isUserExist){
            return res.status(400).json({ error: "Already Have an account with this email .Please try with other email"});
        }
        const hashedPassword = await bcryptjs.hash(password,10);
        console.log(hashedPassword)
        const newUser = new User({email,password:hashedPassword,f_name});
        await newUser.save();

        return res.status(201).json({ meaasge: 'User registered successfully', success: "yes", data: newUser});

    }catch(err){
        console.error(err);
        res.status(500).json({ error: 'server error',message:err.message });
    }
}
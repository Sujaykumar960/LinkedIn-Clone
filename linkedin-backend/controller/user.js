const User = require('../models/user');
const bcryptjs = require('bcryptjs');
const { OAuth2Client } = require('google-auth-library');



exports.loginThroughGmail = async(req, res) => {
    try{
        const { token } = req.body;
        
    }catch(err){
        console.error(err);
        res.status(500).json({ error: 'server error',message:err.message });
    }
}

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

exports.login = async(req, res) => {
    try{
        let {email, password} = req.body;
        const userExist = await User.findOne({email});

        if(userExist && await bcryptjs.compare(password,userExist.password)){
            return res.json({ message: 'Logged in successfully', success: "true", userExist });
        }else{
            return res.status(400).json({ error: 'Invalid credentials' });
        }     
    }catch(err){
        console.error(err);
        res.status(500).json({ error: 'server error',message:err.message });
    }
}

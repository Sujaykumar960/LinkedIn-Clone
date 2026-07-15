const User = require('../models/user');
const bcryptjs = require('bcryptjs');
const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');




const cookieOptions = {
    httpOnly: true,
    secure: false, // Set to true in production
    sameSite: 'lax' //Set to 'none' in production
}

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

exports.loginThroughGmail = async(req, res) => {
    try{
        const { token } = req.body;
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID
        });
        const payload = ticket.getPayload();

        const {sub, email, name, picture} = payload;

        const userExist = await User.findOne({email});
        if(!userExist){
            // Register New User
            userExist = await User.create({
                googleId: sub,
                email,
                f_name: name,
                profilePic: picture
            });
        }
        let jwttoken = jwt.sign({ userId: userExist._id}, process.env.JWT_PRIVATE_KEY);
        res.cookie('token',jwttoken,cookieOptions);
        return res.status(200).json({ user: userExist });

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
            let token = jwt.sign({ userId: userExist._id}, process.env.JWT_PRIVATE_KEY);
            res.cookie('token',token,cookieOptions);
            return res.json({ message: 'Logged in successfully', success: "true", userExist });
        }else{
            return res.status(400).json({ error: 'Invalid credentials' });
        }
    }catch(err){
        console.error(err);
        res.status(500).json({ error: 'server error',message:err.message });
    }
}

exports.updateUser = async(req, res) => {
    try{
        const { user } = req.body;
        const isExist = await User.findById(req.user._id);
        if(!isExist) {
            return res.status(400).json({ error: 'User not found' });
        }
        const updateData = await User.findByIdAndUpdate(isExist._id, user);

        const userData = await User.findById(req.user._id);
        res.status(200).json({
            message: 'User updated successfully',
            user: userData
        })

    }catch(err){
        console.error(err);
        res.status(500).json({ error: 'server error',message:err.message });
    }
}

exports.getProfileById = async(req, res) => {
    try{
        const { id } = req.params;
        const isExist = await User.findById(id);
        if(!isExist) {
            return res.status(400).json({ error: 'User not found' });
        }
        return res.status(200).json({
            message: 'User fetched successfully',
            user: isExist
        });
        
    }catch(err){
        console.error(err);
        res.status(500).json({ error: 'server error',message:err.message });
    }
}


exports.logout = async(req, res) => {
    try{
        res.clearCookie('token', cookieOptions).json({ message: 'Logged out successfully'});
    }catch(err){
        console.error(err);
        res.status(500).json({ error: 'server error',message:err.message });
    }
}

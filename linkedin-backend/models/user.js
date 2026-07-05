const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    googleId: {
        type: String,
    },
    email: {
        type: String,
        required:true
    },
    password: {
        type: String,
    },
    f_name: {
        type: String,
        default: ""
    },
    headline: {
        type: String,
        default: ""
    },
    curr_company: {
        type: String,
        default: ""
    },
    curr_location: {
        type: String,
        default: ""
    },
    profilePic: {
        type: String,
        default: "https://i.pinimg.com/236x/13/74/20/137420f5b9c39bc911e472f5d20f053e.jpg"
    },
    cover_pic: {
        type: String,
        default: "https://new.wizkidsclub.com/wp-content/uploads/2020/07/default-cover.jpg"
    },
    about: {
        type: String,
        default: ""
    },
    skills: {
        type: Array,
        default: [],
    },
    experience: [
        {
            designation: {
                type: String,
            },
            company_name: {
                type: String,
            },
            duration: {
                type: String,
            },
            location: {
                type: String,
            }
        }
    ],
})

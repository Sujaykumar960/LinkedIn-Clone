const mongoose = require('mongoose');


const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/linkedinClone';

mongoose.connect(mongoURI).then(rex => {
    console.log("Database Successfully Connected")
}).catch(err => {
    console.log(err)
})
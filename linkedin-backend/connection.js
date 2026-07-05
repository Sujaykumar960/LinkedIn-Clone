const mongoose = require('mongoose');


// linkedinClone
mongoose.connect('mongodb://localhost:27017/linkedinClone').then(rex => {
    console.log("Database Successfully Connected")
}).catch(err => {
    console.log(err)
})
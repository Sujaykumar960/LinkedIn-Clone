const express = require('express');
const app = express();

require('./connection');



app.get('/', (req, res) => {
    res.send({
        message: "Congratulation you have created a backend server"
    })
})

app.listen(4000, () => {
    console.log("Backend Server is running on port 4000")
})
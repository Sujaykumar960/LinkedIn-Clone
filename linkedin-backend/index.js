require('dotenv').config({path: "./config.env"});
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const cors = require('cors')
const {Server} = require('socket.io')
const http = require("http");

const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173";

const server = http.createServer(app);
const io = new Server(server,{
    cors:{
        origin: frontendUrl,
        methods: ["GET", "POST"],
    }
})

require('./connection');

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: frontendUrl
}))


io.on('connection',(socket)=>{

    console.log("User Connected")

    socket.on("joinConversation", (conversationId) => {
        console.log(`User joined Conversation ID of ${conversationId}`)
        socket.join(conversationId)
    })

    socket.on("sendMessage",(convId,messageDetail)=>{
        console.log("message sent")

        io.to(convId).emit("receiveMessage", messageDetail)
    })

})


const UserRoutes = require('./routes/user');
const PostRoutes = require('./routes/post');
const NotificationRoutes = require('./routes/notification');
const CommentRoutes = require('./routes/comment');
const ConversationRoutes = require('./routes/conversations');
const MessageRoutes = require('./routes/message');


app.use('/api/users', UserRoutes);
app.use('/api/post', PostRoutes);
app.use('/api/notification', NotificationRoutes);
app.use('/api/comment', CommentRoutes);
app.use('/api/conversation', ConversationRoutes);
app.use('/api/message', MessageRoutes);


server.listen(PORT, () => {
    console.log("Backend Server is running on port", PORT)
})
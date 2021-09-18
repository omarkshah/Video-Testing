const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Setting the static folder to be shown on the website
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', socket => {

    console.log('new socket connection made');

    io.emit('show-Webcam', );


});


const PORT =  process.env.PORT ||8080 ;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
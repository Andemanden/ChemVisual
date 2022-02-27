var express = require('express');
var app = express();
var server = app.listen(3000);
app.use(express.static('public'));
console.log('Server is running');


var socket = require('socket.io');

var io = socket(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

io.sockets.on('connection', newConnection);
io.on("connection", (socket) => {  
    socket.on("disconnect", (reason) => {
      console.log('Client disconnected: '+socket.id);
    });});

function newConnection(socket){
    console.log('New connection: '+socket.id);
    socket.on('mouse', mouseMsg);
    function mouseMsg(data){
        socket.broadcast.emit('mouse',data)
    }
}

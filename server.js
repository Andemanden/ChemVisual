const { response } = require('express');
var express = require('express');
var app = express();
var server = app.listen(3000);
app.use(express.static('public'));
console.log('Server is running');


/*---Main Server Configuration Function---*/
function setup(){
  //console.log(apiCall());
  //apiCall();
  console.log("Setup has run")
 
}
setup();

var socket = require('socket.io');

var io = socket(server, { //Configures the io for the server
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
      credentials: true,
    },
});

io.sockets.on('connection', newConnection);
io.on("connection", (socket) => {  
    socket.on("disconnect", (reason) => {
      console.log('______________________');
      console.log(' Client disconnected: '+socket.id);
    });});
io.engine.on("connection_error", (err) => { //In case of connection error
  console.log(err.req);     
  console.log(err.code);     
  console.log(err.message);  
  console.log(err.context);  
});
function newConnection(socket){ //In case of new connection
  console.log('______________________');
  console.log('New connection: '+socket.id);
}

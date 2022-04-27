const { response } = require('express');
var express = require('express');
var app = express();
var server = app.listen(3000);
app.use(express.static('public'));
console.log('Server is running');
let url='none';


function setup(){
  //console.log(apiCall());
  //apiCall();
  console.log("Setup has run")
  url='hello'
}
setup();


function apiCall(){
  //Make notation an object maybe
  //And then unpack it and call the api using smiles notation
  /*
  fetch('https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/2244/property/MolecularFormula/JSON')
  .then(response => response.json())
  .then(data => console.log(data)); 

  return response.json();
*/
/*
  url = 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/2244/property/MolecularFormula/JSON';
  let response = await fetch(url);

  if (response.ok) { // if HTTP-status is 200-299
    // get the response body (the method explained below)
    let json = await response.json();
  } else {
    alert("HTTP-Error: " + response.status);
    console.log("error");
  }
  console.log("Response: "+response.json());
  */
}




var socket = require('socket.io');

function sendmolecule(){


}

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
      console.log('______________________');
      console.log(' Client disconnected: '+socket.id);
    });});
io.engine.on("connection_error", (err) => {
  console.log(err.req);     
  console.log(err.code);     
  console.log(err.message);  
  console.log(err.context);  
});
function newConnection(socket){
  console.log('______________________');
  console.log('New connection: '+socket.id);
  //socket.on('molecular notation', apiCall);
  //console.log(apiCall());  
  
  
}

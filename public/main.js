var socket;

function setup() {
  createCanvas(400, 400);
  background(120);
  socket = io.connect('http://localhost:3000');
  socket.on('mouse', newDrawing);
}

function draw() {
  circle(20,20,20);
}
 

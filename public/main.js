var socket;

function setup() {
  createCanvas(400, 400);
  socket = io.connect('http://localhost:3000');
}

function draw() {
  background(120);
  ellipse(200, 200, 20, 20);
}
 
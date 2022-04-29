var socket;

var sketch1 = function(p){
  p.x=100;
  p.y=100;
  p.setup = function(){
    p.createCanvas(200,200);
    p.background(51);
  }
  p.draw = function(){
    p.fill(255,0,200,25);
    p.noStroke();
    p.ellipse(p.x,p.y,48,48);
  }
  
}
var sketch2 = function(p){
  p.x=100;
  p.y=100;
  p.setup = function(){
    p.createCanvas(200,200,WEBGL);
    p.background(54);
  }
  p.draw = function(){
    p.box(20);
    p.rotateX(frameCount * 0.01);
    p.rotateY(frameCount * 0.01);
  }
  
}

var anewsketch1 = new p5(sketch1);
var anewsketch2 = new p5(sketch2);


function setup() {
  //createCanvas(400, 400);
  //background(120);
  socket = io.connect('http://localhost:3000');
  //socket.on('mouse', newDrawing);
}

function draw() {
  //background(120);
  //circle(20,20,20);
}

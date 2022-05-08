var socket;
let button;
let drawmode=-1;
let selAtom=13;
let molecule=[];
let smiles = [];
let apiresponse;
let drawing=-1;
let selatom=13;

function preload() {
  let url =
   'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/2244/' +
    'property/MolecularFormula/JSON';
  /*httpGet(url, 'json', false, 
  function(response) {
    apiresponse = response;
  });
  */
}


/*var Dim2 = function(p){
  p.x=100;
  p.y=100;
  p.setup = function(){
    p.createCanvas(600,400);
    buildGUI();
  }
  */
 /*
  p.draw = function(){
    p.background(235);
    p.fill(250,250,250);
    p.noStroke();
    p.ellipse(p.x,p.y,48,48);
    p.rectMode(CORNER);
    /*
    p.rect(2, 0, 598, 30, 5); //Top
    p.rect(2, 0, 30, 500, 5); //Side
    p.rect(2, p.height-30, 598, 30, 5); //Buttom
    */
    //drawGUI(); 
    
  //} 
//}

var Dim3 = function(p){
  p.x=100;
  p.y=100;
  p.setup = function(){
    p.createCanvas(300,200,WEBGL);
    p.background(54);
  }
  p.draw = function(){
    p.box(20);
    p.rotateX(frameCount * 0.01);
    p.rotateY(frameCount * 0.01);
  }
  
}

//var anewsketch1 = new p5(Dim2);
//var anewsketch2 = new p5(Dim3);


function setup() {
  //createCanvas(400, 400);
  createCanvas(600,400);
  //background(120);
  socket = io.connect('http://localhost:3000');
  //socket.on('mouse', newDrawing);
  console.log(apiresponse);
 
  buildGUI();



  //WEBGL sketch
  var anewsketch2 = new p5(Dim3);
}

function draw() {
  background(235);
  drawGUI();
  //Draw all atoms and bonds
  for (let elm of molecule){
    elm.show();
    elm.update();
  }

  //circle(200,200,20);
  
}


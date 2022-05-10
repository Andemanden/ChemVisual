var socket;
let button;
let drawmode=-1;
let selAtom=13;
let molecule=[];
let smiles = [];
let apiresponse; 
let drawing=-1; //If still drawing then = 1
let selatom=13; //Selected atom
let smilesInput;
let img;
let i=0;

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

function apicalls(smiles, type, D3){
  //Makes url form the wanted parameters
 
  if (D3==true){
    let url = "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/"
    +smiles+"/"+"PNG?record_type=3d&image_size=large";
    img3d = createImg(url,'Smiles notation wrong');
    img3d.position(640, 20);
  } else if(D3==false) {
    let url = "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/"
    +smiles+"/property/"+type+"/JSON";
    httpGet(url, 'json', false, 
    function(response) {
      apiresponse = response.PropertyTable.Properties[0];
      console.log(response);
    });
  } else if(D3=="2D"){
    let url = "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/"
    +smiles+"/PNG";
    img2d = createImg(url,'Smiles notation wrong');
    img2d.position(380, 100);
    img2d.size(200, 200);
  }


  /*
  httpGet(url, 'json', false, 
  function(response) {
    apiresponse = response;
  });
  */
  console.log(apiresponse);
  /*
  var myImage = document.querySelector('img');

  fetch('flowers.jpg').then(function(response) {
    return response.blob();
  }).then(function(myBlob) {
    var objectURL = URL.createObjectURL(myBlob);
    myImage.src = objectURL;
});
*/

}

function setup() {
  //createCanvas(400, 400);
  createCanvas(600,400);
  //background(120);
  socket = io.connect('http://localhost:3000');
  //socket.on('mouse', newDrawing);
 
  buildGUI();



  //WEBGL sketch
  var anewsketch2 = new p5(Dim3);
}

function draw() {
  background(245);
  for (var key in apiresponse) {
    if (apiresponse.hasOwnProperty(key)) {
        i++
        text(key+": "+apiresponse[key], 35, 40+(i*20));
        //console.log(key + " -> " + apiresponse[key]);
    }
  }
  i=0;
 
  drawGUI();
  //Draw all atoms and bonds
  for (let elm of molecule){
    elm.show();
    elm.update();
  }
  textSize(15);
  fill(0, 0, 0);
  
 

}




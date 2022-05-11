/*        ChemVisual
        Eksamensprojekt
       Version: Beta 2.0
         By: Andreas R
*/

var socket;
let button;
let drawmode=-1;
let selAtom=13;
let molecule=[];
let smiles = []; 
let apiresponse; //The api response
let drawing=-1; //If still drawing then = 1
let selatom=13; //Selected atom
let smilesInput="C(C1C(C(C(C(O1)O)O)O)O)O";
let img;
let i=0;

let fontRegular, fontItalic, fontBold;
function preload() {
  fontRegular = loadFont('/fonts/regular.ttf');
  fontItalic = loadFont('/fonts/italic.ttf');
  fontBold = loadFont('/fonts/boldfont.ttf');
  fontChemical = loadFont('/fonts/chemical.otf');
}

/*---For possibly drawing on seperate canvas  using WEBGL---*/
//Uncomment to use
/* var Dim3 = function(p){
  p.x=100;
  p.y=100;
  p.setup = function(){
    p.createCanvas(300,200,WEBGL);
    p.background(54);
  }
  p.draw = function(){
  }
}*/


//var anewsketch2 = new p5(Dim3); 

/*---Api function for PUG REST---*/
function apicalls(smiles, type, D3){
  //Makes url form the wanted parameters
  if (D3==true){ //In case of wanting 3D structure
    let url = "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/"
    +smiles+"/"+"PNG?record_type=3d&image_size=large";
    img3d = createImg(url,'Smiles notation wrong');
    img3d.position(640, 20);
  } else if(D3==false) { //In case of wanting data
    let url = "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/"
    +smiles+"/property/"+type+"/JSON";
    httpGet(url, 'json', false, 
    function(response) {
      apiresponse = response.PropertyTable.Properties[0];
    });
  } else if(D3=="2D"){ //In case of wanting 2D structure 
    let url = "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/"
    +smiles+"/PNG";
    img2d = createImg(url,'Smiles notation wrong');
    img2d.position(390, 100);
    img2d.size(200, 200);
  }
}

/*---Main Configuration Function---*/
function setup() {
  createCanvas(600,400);
  socket = io.connect('http://localhost:3000');
  buildGUI(); //Configures the GUI in /ConfigGUI.js
  
  //var anewsketch2 = new p5(Dim3); // Has to be uncommented to run
}

/*---Main Loop---*/
function draw() {
  background(245);
  for (var key in apiresponse) { //Loops through property keys
    if (apiresponse.hasOwnProperty(key)) { //Checks contents
        i++
        text(key+": "+apiresponse[key], 35, 40+(i*20));
        //console.log(key + " -> " + apiresponse[key]); 
    }
  }
  i=0;
 
  drawGUI(); //Draws the gui
  //Draw all atoms and bonds
  for (let elm of molecule){
    elm.show();
    elm.update();
  }
 
  
 

}




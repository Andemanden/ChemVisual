
let types = ["☝︎","✁","🧐","🧮","3D",
            "−","=","≡","〰","e⁺","e⁻","→","T",
            "C","N","O","F","Br","Cl","P","S","B","I"];
function buildGUI() {
    for (let i = 0; i < 10; i++){ //Buttom atoms
        button = createButton(types[i+13]);
        button.position(10+(i*28), 375);
        button.mousePressed(function(){
             drawmode=(i+13);
             selatom=drawmode;
            });
    }
    for (let i = 0; i < 5; i++){ //Top buttons
        button = createButton(types[i]);
        button.position(35+(i*36), 4);
        button.mousePressed(function(){drawmode=i});
    }
    for (let i = 0; i < 8; i++){ //Side buttons
        button = createButton(types[i+5]);
        button.position(4, 35+(i*28));
        button.mousePressed(function(){drawmode=(5+i)});
    }
   console.log(button);
   /* 
   button = createButton('C');
    button.position(6, 0);
    button.mousePressed(drawmode=1);
    button.labl = 'O';
   */
    let inp = createInput('');
    inp.position(250, 4);
    inp.size(100);
    inp.input(smilesInputFxn);

}

function smilesInputFxn(){
    smilesInput = this.value();
    console.log(smilesInput);
}

function mousePressed(){   
    if (drawmode==4 && mouseX>176  && mouseX<210 && (mouseY)>4 && (mouseY)<25){
        apicalls(smilesInput, "synonyms", true); //"MolecularFomula"
        console.log("3D");
    }
    if (mouseX>35 && mouseX<598 && (mouseY)>35 && (mouseY)<370
        && drawing==-1){

        console.log(drawmode);
        console.log("X: "+mouseX);
        console.log("Y: "+mouseY);
        if (drawmode<5){ //Generel buttons
            
        } else if (drawmode>4 && drawmode<9){ // Bonds and more
            molecule.push(new Atom(mouseX,(mouseY),selatom,20));
            molecule.push(new Bond(mouseX,(mouseY),drawmode-4));
            drawing*=-1;
        } else if (drawmode>12){ //Atoms
            selatom=drawmode;
        }
    } else if (drawing==1){
        for (let i = molecule.length - 1; i < molecule.length; i++) {
            drawing*=-1;
        }
    }

}

function texts(){


}

function selects(){


}


function cut(){


}

function analyse(){


}

function calculate(){


}

function buttonpress(){
    drawmode=i

}


function drawGUI(){
    fill(250,250,250);
    noStroke();
    rectMode(CORNER);
    rect(2, 0, 598, 30, 5); //Top
    rect(2, 0, 30, 500, 5); //Side
    rect(2, height-30, 598, 30, 5); //Buttom
}

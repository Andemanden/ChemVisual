
let types = ["☝︎","✁","🧐","🧮","3D",
            "−","=","≡","〰","e⁺","e⁻","→","T",
            "C","N","O","F","Br","Cl","P","S","B","I"];
function buildGUI() {
    let atomname =["C","N","O","F","Br","Cl","P","S","B","I"];
    let topbuttonname = ["☝︎","✁","🧐","🧮","3D"];
    let sidebuttonname = ["−","=","≡","〰","e⁺","e⁻","→","T"];
    for (let i = 0; i < 10; i++){
        button = createButton(types[i+13]);
        button.position(10+(i*28), 375);
        button.mousePressed(function(){drawmode=(i+13)});
    }
    for (let i = 0; i < 5; i++){
        button = createButton(types[i]);
        button.position(35+(i*36), 4);
        button.mousePressed(function(){drawmode=i});
    }
    for (let i = 0; i < 8; i++){
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

}
function mousePressed(){
    console.log(drawmode);
    if (drawmode<5){ //Generel buttons
        
    } else if (drawmode>4 && drawmode<13){ // Bonds and more
    
    } else if (drawmode>12){ //Atoms
        selAtom=drawmode;
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

/*
function drawGUI(){
    rectMode(CORNER);
    rect(2, 0, 500, 30, 5);
    //console.log("NO");
}
*/

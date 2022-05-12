/*-----Configures The GUI And It´s Functions-----*/ 
let types = ["☝︎","✁","🧐","🧮","3D",
            "−","=","≡","〰","e⁺","e⁻","→","T",
            "C","N","O","F","Br","Cl","P","S","B","I"];
function buildGUI() { //Configures the GUI with HTML elements
    /*---Creates Buttons---*/
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
    /*---Creates Input field---*/
    let inp = createInput('Compound');
    inp.position(250, 4);
    inp.size(100);
    inp.input(smilesInputFxn);
    
}

/*---Other Functions--- */
function smilesInputFxn(){
    smilesInput = this.value(); 
    console.log(smilesInput);
}



function mousePressed(){   
    if (drawmode==4 && mouseX>176  && mouseX<210 && (mouseY)>4 && (mouseY)<25){
        //For 3D button
        apicalls(smilesInput, "none", true); 
        apicalls(smilesInput, "none", "2D");
    } else if (drawmode==3 && mouseX<177  && mouseX>142 && (mouseY)>4 && (mouseY)<25){
        //For Calculation button
        console.log("Calculation");
        //Calls api function
        apicalls(smilesInput, "Title,MolecularFormula,MolecularWeight,IUPACName,IsotopeAtomCount,"+
        "AtomStereoCount,FeatureAcceptorCount3D,FeatureDonorCount3D,FeatureHydrophobeCount3D"
        , false); //"MolecularFomula"
        
    }
    if (mouseX>35 && mouseX<598 && (mouseY)>35 && (mouseY)<370
        && drawing==-1){ //Inside of drawing field
        if (drawmode<3){ //Generel buttons

        } else if (drawmode>4 && drawmode<9){ // Bonds and more
            molecules.push(new Atom(mouseX,(mouseY),selatom,20));
            for (let i = molecules.length - 1; i < molecules.length; i++) {
                //Iterates over last value of array
                molecules[i].create();
                moleculs[i].addtosmiles();
            }
            molecules.push(new Bond(mouseX,(mouseY),drawmode-4));
            drawing*=-1;
        } else if (drawmode>12){ //Atoms
            selatom=drawmode;
        }
    } else if (drawing==1){ 
        for (let i = molecules.length - 1; i < molecules.length; i++) {
            //Iterates over last value of array
            drawing*=-1
            molecules[i].create();
            moleculs[i].addtosmiles();
        }
    }

}

/*---Draws The GUI---*/
function drawGUI(){
    fill(230,230,230);
    noStroke();
    rectMode(CORNER);
    rect(2, 0, 598, 30, 5); //Top
    rect(2, 0, 30, 500, 5); //Side
    rect(2, height-30, 598, 30, 5); //Buttom
    //Text
    textSize(15);
    fill(0, 0, 0);
    text("Selected Atom: "+types[selatom],290,390)
    textFont(fontItalic);
    text("Beta 2.0",530,390)
    textFont(fontChemical);
    textSize(28);
    text("C",380,24);
    textSize(12);
    textFont(fontBold);
    text("hemVisual",402,20)

    textFont(fontRegular);
}

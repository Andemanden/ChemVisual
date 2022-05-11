/*-----Class Functions For Molecule Parts----- */
class Molecule extends p5.Vector  {
    constructor(x, y, t) {
        this.pos = createVector(x, y);
        this.type = t;  //Atomnumber or bondtype
        this.hidden=true;
    }
   

    addtosmiles(){
       smiles.push(types[this.type]);
    }


}

/*---The Atom Class---*/
class Atom extends Molecule {
    constructor(x, y, t, r) {
        super(x, y, t);
        this.r = r;
        
    }

    update (){


    }
    overlaps(x,y){

    }
    show(){
        if (this.hidden==false){
            text(types[this.type],this.pos.x,this.pos.y,10,10);
        }
    }

    create(){
        this.pos.x=mouseX;
        this.pos.y=mouseY;
        this.hidden=false;
    }


}

/*---The Bond Class---*/
class Bond extends Molecule {
    constructor(x, y, t) {
        super(x, y, t);
        this.mouseX=0;
        this.mouseY=0;
    }

    update (){


    }
    overlaps(){
        return false;
    }

    show(){
        line(this.pos.x,this.pos.y,this.mouseX,(this.mouseY));
        this.hidden=false;
    }

    create(){
        this.mouseX=mouseX;
        this.mouseY=mouseY;
        
    }

}
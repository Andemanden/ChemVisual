/*-----Class Functions For Molecule Parts----- */
class Molecule extends p5.Vector  {
    constructor(x, y, t) {
        this.pos = createVector(x, y);
        this.type = t;  //Atomnumber or bondtype
        this.hidden=true;
    }
   

    addtosmiles(){


    }


}

/*---The Atom Class---*/
class Atom extends Molecule {
    constructor(x, y, t, r) {
        super(x, y, t);
        this.r = r;
        this.hidden=false;
    }

    update (){


    }
    overlaps(x,y){
        if (0=0){

        }

    }
    show(){
        if (this.hidden==false){
            text(types[this.type],this.pos.x,this.pos.y,10,10);
        }
    }

    create(){
        this.pos.x=mouseX;
        this.pos.y=mouseY;
    }


}

/*---The Bond Class---*/
class Bond extends Molecule {
    constructor(x, y, t) {
        super(x, y, t);
        this.hidden=false;
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
    }

    create(){
        this.mouseX=mouseX;
        this.mouseY=mouseY;

    }

}
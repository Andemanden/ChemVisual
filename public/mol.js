class Molecule {
    constructor(x, y, t) {
        this.pos = createVector(x, y, z);
        this.type = t;  //Atomnumber or bondtype
        this.hidden=true;
    }
   

    addtosmiles(){


    }


}

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
        


    }


}

class Bond extends Molecule {
    constructor(x, y, t) {
        super(x, y, t);
        this.hidden=false;
        
    }

    update (){


    }
    overlaps(){
        return false;
    }

    show(){
        line(this.pos.x,this.pos.y,mouseX,(mouseY+600));
    }

    create(){


    }

}
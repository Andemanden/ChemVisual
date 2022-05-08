class molecule {
    constructor(x, y, t) {
        this.pos = createVector(x, y, z);
        this.type = t;  //Atomnumber or bondtype
        this.hidden=true;
    }

    addtosmiles(){


    }


}

class atom extends molecule {
    constructor(x, y, t) {
        super(x, y, t);
        
        
    }

    update (){


    }

    show(){
        if (this.hidden==false){
            text(this.t,this.pos.x,this.pos.y);
            
        }
    }

    create(){
        this.pos.
        this.hidden=false;


    }


}

class bonds extends molecule {
    constructor(x, y, t) {
        super(x, y, t);
        
        
    }

    update (){


    }

    show(){
    }

    create(){


    }

}
class child {
    constructor(x,y){
        var options={
         'restitution':0.8,
         'friction' :1.0,
         'density':2.0,
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        this.image=loadImage("man.png")
        World.add(world,this.body)
    }
    display(){
        push ()
        
        translate (this.body.position.x,this.body.position.y)
      scale (1)
        image(this.image, 0, 0, this.width, this.height);
        pop ();
    
    }
    }
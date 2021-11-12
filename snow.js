class Snow{
    constructor(x,y){
        var options={
            'restitution':0.8,
            'friction':1.0,
            'density':0.05,
'isStatic':false,
        }
        
     this.body=Bodies.rectangle(x,y,width,height,options)
     this.height=height
     this.width=width
    this.image=loadImage("snow4.webp")
    }
    display(){
        var angle = this.body.angle;
        push ()
        translate (this.body.position.x,this.body.position.y)
        rotate (angle)
       scale (0.1)
    image(this.image, 0, 0, this.width, this.height);
    pop ()
    }
}
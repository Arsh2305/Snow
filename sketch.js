
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var background_img,child1,snow
var snow=[]
function preload(){
 background_img=loadImage("snow1.jpg")
}
function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;


child1=new child(300,200)
child1.body.position.x=mouseX
}

function draw() {

  background(background_img);  
  Engine.update(engine)
  child1.display()
  for(var a=0;a<snow.length;a++){
    snow[a].display()
  }

  if(frameCount%60===0){
   snow.push(new Snow(random(100,1100),0))
  }
}

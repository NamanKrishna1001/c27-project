const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

//var constraintlog,joint;
var constraint1;
var box

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
box=new Box(600,400,100,100);
constraint1 = new Constrant(box.body,{x:400,y:100});

   // constraintlog = new Log(200,100,100,PI/2);
    //joint = new Chain(bird.body,constraintlog.body);

}

function draw(){
    background("black");
    Engine.update(engine);
 box.display();
  constraint1.display();
  //drawSprites();
   // constraintlog.display();
   // joint.display();
}



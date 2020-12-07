const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1500,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,550,50,50);
    box2 = new Box(1000,550,50,50);
    pig1=new Pig(900,550,40,40);
    log1=new Log(900,500,300,PI/2)
    
    box3 = new Box(800,400,50,50);
    box4 = new Box(1000,400,50,50);
    //pig2=new Pig(900,400,40,40);
    //log2=new Log(900,350,300,PI/2)
    
    ground = new Ground(width/2,height,width,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    //pig2.display();
    //log2.display();
    ground.display();
}
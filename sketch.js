
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1 ,box2 , box3 ;
var papper1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1=createSprite(500,660,200,10);
    box2=createSprite(400,590,10,150);
	box3=createSprite(600,590,10,150);
	box1.shapeColor=("red")
    box2.shapeColor=("red")
    box3.shapeColor=("red")

	papper1 = new paper(10,10,10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  papper1.display();
  
 
}




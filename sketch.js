
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1 ,box2 , box3 ;
var paper1;
var groundd


	


function setup() {
	createCanvas(900, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1=new box (500,660,200,10);
    box2=new box (400,590,10,150);
	box3=new box (600,590,10,150);
	box1.shapeColor=("red")
    box2.shapeColor=("red")
    box3.shapeColor=("red")
	groundd = new ground(400,700,800,20)

	paper1 = new paper(200,200,10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  box1.display();
  box2.display();
  box3.display();
  groundd.display();
  
 
}
function keyPressed() {
if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:3,y:-4})
}	
}




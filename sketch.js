
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1 = new Bob(200,550,60)
	bob2 = new Bob(260,550,60)
	bob3 = new Bob(320,550,60)
	bob4 = new Bob(380,550,60)
  bob5 = new Bob(440,550,60)

  

  rope1 = new Sling(bob1.body,{x:340,y:200})
  rope2 = new Sling(bob2.body,{x:400,y:200})
  rope3 = new Sling(bob3.body,{x:450,y:200})
  rope4 = new Sling(bob4.body,{x:500,y:200})
  rope5 = new Sling(bob5.body,{x:550,y:200})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()

 

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  


  drawSprites();
 
}

function mouseDragged() {
  
Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY})
  
}


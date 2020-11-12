
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var object1,object2,object3,object4,object5;
var roof;





function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
 
	object1=new Bob(200,50,20)
	object2=new Bob(220,50,20);
	object3=new Bob(230,50,20);
	object4=new Bob(240,50,20);
	
    roof=new Roof(350,100,60,20);
    
   












}


function draw() {
  Engine.update(engine);
  background(255);
  
  object1.display();
  object2.display();
  object3.display();
  object4.display();
  object5.display();

  roof.display();



















  drawSprites();
 
}




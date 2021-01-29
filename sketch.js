
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var world,boy;
var launchingForce=100

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
    mango2 = new mango(1100,200,30);
    mango3=new mango(1000,100,30);
    mango4=new mango(1000,200,30);
    mango5=new mango(950,50,30);
    mango6=new mango(1200,250,30);
    //mango7=new mango(1100,100,30);
    //mango8=new mango(1100,100,30);


  stoneObj=new Stone(260,460,23);
  launcherObject= new launcher(stoneObj.body,{x:240,y:420});


	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  
  image(boy ,200,340,200,300);
  
  treeObj.display();
  mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
  groundObject.display();
  launcherObject.display();
 stoneObj.display();

 detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  detectCollision(stoneObj,mango6);
 
}

function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  launcherObject.fly();
}

function keyPressed(){
  if(keyCode===32){
      Matter.body.setPosition(stoneObj.body,{x:235,y:420});
      launcherObject.attach(stoneObj.body);
  }
}

  function detectCollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position;
  stoneBodyPosition=lstone.body.position;

 var distance = dist(mangoBodyPosition.x,mangoBodyPosition.y,stoneBodyPosition.x,stoneBodyPosition.y);
 if(distance<=lmango.r+lstone.r){
 Matter.Body.setStatic(lmango.body,false);
}
}
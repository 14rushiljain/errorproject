const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var box1,box2,box3;
var ground;
var r=10;
var x=20;
var y=20;
var ball;
function preload()
{

}
function setup() {

createCanvas(800, 700);		

engine = Engine.create();
world = engine.world;

box1 =createSprite(750,510,20,100);	
box1.shapeColor=color(255,0,0);

box2=createSprite(630,510,20,100);
box2.shapeColor=color(255,0,0);

box3=createSprite(690,550,100,20);
box3.shapeColor=color(255,0,0);

ground = new Ground(400,580,800,50);
ground.shapeColor=color(255);



//ball=Ellipse(100,530,10	);
// ball.shapeColor=color(255,0,0);


}
function draw() {
rectMode(CENTER);
background(0);
keyPressed();
drawSprites();
}
function keyPressed(){
if(keyCode === UP_ARROW){
	//Matter.Body.applyForce(paperObject.body,paperBody.Object.position,{x:85,y:-85});
   ball.velocityY=ball.velocityY+10;
	
}
}
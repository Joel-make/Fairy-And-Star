var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
//	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;
	fairy.debug=false;
	fairy.setCollider("rectangle",550,0,100,100)

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
	star.debug=false;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  keyPressed();
  console.log(fairy.x)
  if(star.y >485 && star.y<495 && fairy.x > 497 && fairy.x < 515)
  {
   star.velocityY=0; 
  } 
  drawSprites();
  fill("white");
  text("NOTE:", 30,30);
  text("1. Press LEFT ARROW key to go left", 30,50);
  text("2. Press RIGHT ARROW key to go right", 30 , 70);
  text("3. Press UP ARROW key to stop the fairy", 30 , 90);
  text("4. Press DOWN ARROW key to make the star fall down", 30 , 110);
  text("5.Do not Press the DOWN ARROW key after the star is in the fairy's hand or it will fall out of her hand", 30 , 130);
}

function keyPressed() {
	//write code here
	
	
	if (keyCode===RIGHT_ARROW)
	{
		fairy.velocityX=2;
	}
	if( keyCode===LEFT_ARROW)
	{
		fairy.velocityX=-2;
	}
	if( keyCode===UP_ARROW)
	{
		fairy.velocityX=0;
	}
	if( keyCode===DOWN_ARROW)
	{
		star.velocityY=5;
		
	}
	
}        

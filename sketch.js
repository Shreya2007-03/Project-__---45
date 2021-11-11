
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var basketImg, chipsImg, carrotImg,burgerImg,cucumberImg;
var basket,chips,carrot,burger,cucumber;




function preload()
{
	
basketImg = loadImage("basket_Img.jpg");
chipsImg = loadImage("chips_Img.jpg");
carrotImg = loadImage("carrot_Img.jpg");
burgerImg = loadImage("burger_Img.jpg");
cucumberImg  = loadImage("cucumber_Img.jpg")




}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.




if(keyDown("right")){
   basket.velocityX = 2
}


if(keyDown("left")){
   basket.velocityX = -2
}

	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background(0);


// creating basket sprite.
  basket = createSprite(650,600,50,50)
  basket.addImage(basketImg)
  basket.scale = 0.5


// creating cucumber sprite.
  cucumber = createSprite(300,200,50,50)
  cucumber.addImage(cucumberImg)
  cucumber.scale = 0.3


// creating chips sprite.
  chips = createSprite(700,100,50,50)
  chips.addImage(chipsImg)
  chips.scale = 0.1


// creating carrot sprite.
  carrot = createSprite(500,200,50,50)
  carrot.addImage(carrotImg)
 carrot.scale = 0.3



// creating burger sprite.
  burger = createSprite(400,200,50,50)
  burger.addImage(burgerImg)
  burger.scale = 0.3





  drawSprites();
 
}




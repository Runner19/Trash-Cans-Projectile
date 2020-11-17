//Variables - meant to be changed
var WasteBin_Part1;
var WasteBin_Part2;
var WasteBin_Part3;

//Constants - not meant to be changed
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1365, 650);

	engine = Engine.create();
	world = engine.world;

	//Bodies
	 ground = new ground(600, 571, 1600, 20);
	 WasteBin_Part1 = new WasteBin(900, 550, 200, 20);
	 WasteBin_Part2 = new WasteBin(790, 510, 20, 100);
	 WasteBin_Part3 = new WasteBin(1010, 510, 20, 100);
	 Ball = new WastePaper(200, 250, 30);

	 Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("yellow")
  ground.display();
  fill("orange");
  WasteBin_Part1.display();
  fill("orange");
  WasteBin_Part2.display();
  fill("orange");
  WasteBin_Part3.display();
  fill("white");
  Ball.display();
  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		console.log("uparrow pressed!");
		Matter.Body.applyForce(Ball.body,Ball.body.position,
			{x:26,y:-74});
	}
}
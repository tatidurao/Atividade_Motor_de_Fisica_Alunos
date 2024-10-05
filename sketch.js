const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground,leftSide,rightSide;
var world;
var radius = 40;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	//dados json pode armazenar muitas coisas
	var ball_options={
		isStatic:false, //corpo estatico
		restitution:0.3, //elasticidade < - elastica > + elastica 
		friction:0,//deslizar < - desliza  > + desliza
		frictionAir:0.,//desacelerar < - desacelerará > + desacelerará
		density:1.2 // massa/volume < mais leve  > mais pesado
	}
	var ground_options={
		isStatic:true			
	}

	ball = Bodies.circle(260,100,radius/2,ball_options);
	World.add(world,ball);

	ground=Bodies.rectangle(width/2,670,width,20, ground_options);
	World.add(world, ground);
		
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  ellipse(ball.position.x,ball.position.y,radius);
  
  stroke("white");//contorno da forma
  fill("yellow");//preenchimento da forma
  rect(ground.position.x,ground.position.y,1600,20);

  //Atualizar motor de fisica a cada quadro	
  Engine.update(engine);		

  
}




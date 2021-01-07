const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ball;
var engine ;
var world ;
var object1 ;
var ball1 ;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var object1_option = {

      isStatic: true
  }
  object1  = Bodies.rectangle(200,400,400,20, object1_option);
  World.add(world,object1);
  console.log(object1);
  console.log(object1.position.x);
  console.log(object1.position.y);
  
  var ball_option = {

    restitution: 1
  }

  ball = Bodies.circle(200,100,20, ball_option);
  World.add(world, ball);
  console.log(ball);
  console.log(ball.position.x);
  console.log(ball.position.y);

  //ball1 = Bodies.circle(100,100,20);
  //World.add(world,ball1);

  //Engine.run(engine);

}

function draw() {
  background(1); 
  Engine.update(engine);
  rectMode(CENTER);
  fill("cyan");
  rect(object1.position.x,object1.position.y,400,20);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);

 // ellipse(ball1.position.x,ball1.position.y,20,20);
}
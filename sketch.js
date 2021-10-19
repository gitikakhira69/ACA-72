//Write your code here
const Engine = Matter.Engine;
const Composite= Matter.Composite;
const Bodies = Matter.Bodies;

var engine, world;
var ball,ball2;
var ground;
var rectangle1,rectangle2,rectangle3;

function setup(){
    canvas = createCanvas(800,800)
    engine = Engine.create();
    world = engine.world;

    var ball_options = {
        restitution : 1
    }
    var ground_option = {
        isStatic:true
    }
    var rect_options={
        istatic:true
    }
    ground = Bodies.rectangle(400,790,800,30,ground_option)
    ball = Bodies.circle(100,600,10,ball_options);
    ball2 = Bodies.circle(300,600,10,ball_options)
  
    Composite.add(world,[ball,ground,ball2])

}

function draw(){
    background("#C0FEFC");
    Engine.update(engine);
    fill("red");
    ellipseMode(CENTER);
    ellipse(ball.position.x,ball.position.y,100);
    ellipse(ball2.position.x,ball2.position.y,50);
    rectMode(CENTER);
    fill("green");
    rect(ground.position.x,ground.position.y,800,20);
}
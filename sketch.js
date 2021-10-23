//Write your code here
const Engine = Matter.Engine;
const Composite= Matter.Composite;
const Bodies = Matter.Bodies;

var engine, world;
var ball,ball2;
var ground;
var rectangle1,rectangle2,rectangle3;
var square;

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

    ball = Bodies.circle(100,600,50,ball_options);
    ball2 = Bodies.circle(300,600,50,ball_options)

    rectangle1 = Bodies.rectangle(600,700,250,40,rect_options)
    rectangle2 = Bodies.rectangle(600,680,250,40,rect_options)
    rectangle3 = Bodies.rectangle(600,650,250,40,rect_options)

    square = Bodies.rectangle(600,450,80,80,rect_options)

    ground = Bodies.rectangle(400,790,800,30,ground_option)
    Composite.add(world,[ball,ground,ball2,rectangle1,rectangle2,rectangle3,square])

}

function draw(){
    background("#C0FEFC");
    Engine.update(engine);
    
   

    rectMode(CENTER);
    fill("green");
    rect(ground.position.x,ground.position.y,800,30);

    fill("black")
    stroke("grey")
    strokeWeight(5)
    rect(rectangle1.position.x,rectangle1.position.y,250,40)
    rect(rectangle2.position.x,rectangle2.position.y,250,40)
    rect(rectangle3.position.x,rectangle3.position.y,250,40)
    
    stroke("yellow")
    strokeWeight(2)
    fill("purple")
    rect(square.position.x,square.position.y,80,75)

    fill("Blue");
    stroke("black")
    strokeWeight(3)
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,50);
    ellipse(ball2.position.x,ball2.position.y,50);
}
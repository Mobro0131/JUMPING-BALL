const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(600,580,1200,20,ground_options);
    World.add(world,ground);
    
    var ballOptions ={
        restitution:1.5
    }
    ball = Bodies.circle(200,200,25,ballOptions);
    World.add(world,ball)
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,1200,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,25,25);
}
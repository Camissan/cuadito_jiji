const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var pelota;
var circul;
var palo;
var plane;
function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    circul = new Circulo (300,300,50,50);
    pelota = new Pelota(222,200,50,50);
    palo = new Palito(400,350,60,60);
    ground = new Ground(600,height,1200,20)
    plane = new Plane(600,height,120,20);

}

function draw(){
    background("lightblue");
    Engine.update(engine);
    circul.display();
    pelota.display();
    ground.display();
    palo.display();
    plane.display();
}

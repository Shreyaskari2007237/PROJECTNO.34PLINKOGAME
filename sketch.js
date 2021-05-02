const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;

function preload(){

}

function setup() {
  createCanvas(480,800);
  engine=Engine.create();
  world = engine.world;

  ground = new Ground(400,790,800,18);

  for(var k=0; k<=width; k= k+ 80){
    divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight));
  }
  for(var j=25;j<=width;j=j+40){
    plinkos.push(new Plinko(j,50,10));
  }
  for(var j=15;j<=width-10;j=j+40){
    plinkos.push(new Plinko(j,100,10));
  }
  for(var j=25;j<=width;j=j+40){
    plinkos.push(new Plinko(j,150,10));
  }
  for(var j=15;j<=width-10;j=j+40){
    plinkos.push(new Plinko(j,200,10));
  }
  
      Engine.run(engine);
}

function draw() {
  background("black"); 
  text(mouseX + ',' + mouseY, 30, 45);
  Engine.update(engine); 

  ground.display();

  for(var i=0;i<plinkos.length;i++){
    plinkos[i].display();
  }
  for(var j=0;j<particles.length;j++){
    particles[j].display();
  }
  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
}
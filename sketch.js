var sea;
var ship;
var edges;
function preload(){
seaimg=loadImage("sea.png");
shipimg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,200,50,50)
  sea.addImage("s",seaimg);
  sea.scale=0.2
  edges = createEdgeSprites()

  ship=createSprite(200,200,50,50)
  ship.addAnimation("sh",shipimg)
  ship.x50
  ship.scale=0.1
}

function draw() {
 
  sea.velocityX=-2
  if(sea.x<0) {
    sea.x=ground.width/2
  }
  
  drawSprites();
}
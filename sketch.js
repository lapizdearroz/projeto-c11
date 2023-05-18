var  mar, marimg;
var navio, navioimg;

function preload(){
marimg=loadImage("sea.png")
navioimg=loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
}

function setup(){
  createCanvas(800,600);

  mar = createSprite(400,300,20,20)
  mar.addImage(marimg);
  mar.scale = 0.5
  mar.velocityX = -5
  
  navio = createSprite(350,400,20,20);
  navio.addAnimation("navegando", navioimg)
  navio.scale= 0.2
}

function draw() {
  background("blue");

  if(mar.x < 0){
    mar.x = 400
  }
    drawSprites();
   
 
}


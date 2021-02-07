
var player,playerimg;
var obstacle;
var track;

function preload(){
  playerimg=loadImage("car2.png");
  track=loadImage("track.png");
}



function setup() {
createCanvas(500,500);

  
player=createSprite(250,350,20,50);
player.addImage(playerimg);



  


}


function draw() {
background(track);

if(keyDown(LEFT_ARROW) && player.x>-15){
  changePosition(-15,0);
}

if(keyDown(RIGHT_ARROW) && player.x>15){
  changePosition(15,0);
}  

if(keyDown(UP_ARROW)){
  changePosition(0,20);
  stroke(10);
  fill("red");
  ellipse(x,y,60,60);
  cars[index - 1].shapeColor = "red";
  camera.position.x = displayWidth/2;
  camera.position.y = player.y;
}
  
drawSprites();
}

function changePosition(x,y){
  x=player.x;
  y=player.y;
}



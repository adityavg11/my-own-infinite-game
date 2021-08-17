var player,obstacle,sky;
var playerimg;
var obstacleimg,obstacleGroup;
var score = 0;
var gameState="play";
var path,pathimg;
var gameover,gameoverimg;


function preload(){
playerimg=loadImage(" player.png");
obstacleimg=loadImage("obstacle.jpg");
pathimg=loadImage("sky.jpg");
gameoverimg=loadImage("game over.png");

}

function setup() {
createCanvas(600,600);

sky=createSprite(50,300,200,200)
sky.addImage("bckgrd",pathimg);
sky.scale=0.6;
sky.velocityY=3;

player=createSprite(300,410,20,20);
player.addImage("naruto",playerimg);
player.scale=0.3;

gameover = createSprite(300,300,50,50);
gameover.addImage("end",gameoverimg);
gameover.visible=false;



obstacleGroup = new Group()





 
}

function draw() {
 background("255");

if(sky.y>330){
sky.y=height/2;

}

 if(gameState==="play"){
    if(keyDown("left_arrow")){
  
        // write a code to move left when left arrow is pressed
  player.x=player.x-3;
  
      }
      if(keyDown("right_arrow")){
    
      
        // write a code to move left when right arrow is pressed
        player.x=player.x+3;
  
      }
      if(keyDown("space")){
    
     
        // write a code to move up when space arrow is pressed
        player.velocityY=-5;
      }
    
    player.velocityY = player.velocityY + 0.8;
    
spawnObstacles();




if(obstacleGroup.isTouching(player)|| player.y>700){
  gameState="end";

  



}





 }

if(gameState==="end"){
  player.destroy()
  gameover.visible=true;

  

}


 
 
    drawSprites();


}


function spawnObstacles(){
if(frameCount % 240===0){
    obstacle=createSprite(random(50,350),40,10,10)
    obstacle.addImage("rasengan",obstacleimg);
obstacle.velocityY=1;
player.depth=obstacle.depth
player.depth=player.depth+1;
obstacle.lifetime=600;
obstacle.scale=0.5;

obstacleGroup.add(obstacle);    


}




}
















var land;

var monkey,monkey_run;

var banana,bananapng;

var obstacle,obstaclepng;

var score=0;



var n,a;

function preload(){
  monkey_run=loadAnimation("sprite_0.png","sprite_1.png",
 "sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png"                 );

  bananapng=loadImage("banana.png");
  obstaclepng=loadImage("obstacle.png");

}



function setup() {
  createCanvas(300,400);
 monkey=createSprite(30,340,20,20);
  monkey.addAnimation("kk",monkey_run);
  monkey.scale=0.1;
     
land=createSprite(10,365,500,10);
       land.velocityX=-5;
   
       
     




}


function draw() {
background("white");

  if(keyDown("space")&& monkey.y >= 100) {
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  
  
  text("score="+score,20,20) 

if(land.x=100){
        land.x=land.x/2;
       }  
  
  monkey.collide(land);


 createbanana();


  drawSprites();



}

function createbanana(){

  if(frameCount%80===0){
    n=Math.round(random(190,150))
    banana=createSprite(350,n,20,20);
  banana.addAnimation("bb",bananapng);
  banana.velocityX=-5;
  banana.scale=0.1;
    banana.lifetime=400;
    
  }

if(frameCount%90===0){
    a=Math.round(random(400,200))
    obstacle=createSprite(a,350,20,20);
  obstacle.addAnimation("bb",obstaclepng);
  obstacle.velocityX=-5;
  obstacle.scale=0.1;
       obstacle.lifetime=400;
  
  


}
    




     


}






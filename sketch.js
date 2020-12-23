
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var monkeyStopped;
var jungleI;
var score;
var ground;
var score;
var PLAY=1;
var END=0;
var gameState=PLAY;
var invisible;
var survivalT;
var background1;



function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  jungleI=loadImage("jungle image.jpg")
  
  monkeyStopped=loadAnimation("sprite_1.png");
 
}



function setup() {
  createCanvas(600,400);
  
  monkey=createSprite(100,355,50,50);
  monkey.addAnimation("monkey running",monkey_running);
  monkey.scale=0.12;
  monkey.addAnimation("monkey_S",monkeyStopped); 
  //monkey.debug=true;
  monkey.setCollider("rectangle",0,-50,600,600)
  
  
  ground=createSprite(300,385,2000,5);
  ground.velocityX=-8;
  
  
  
  obstacleGroup=new Group();
  foodGroup=new Group();
  
  score=0;
  
  survivalT=0;
  
  
  
  
  

  
}



function draw() {
  background(250);
  if(gameState===PLAY){
    console.log(monkey.y)
    
  if(keyDown("space") ) {

    monkey.velocityY=-20;
}
   
    //monkey gravity so that it will not go up
    monkey.velocityY=monkey.velocityY + 1;
     monkey.collide(ground);
  
  if(ground.x<0){
    ground.x=ground.width/2
}
  if(frameCount % 7===0){
    
    survivalT=survivalT+1;
}
    
   
    
  
  obstacles();
  bananas ();
  
  }else if(gameState==END){
    
    ground.velocityX=0;
    
    
    
    
    obstacleGroup.setVelocityXEach(0);
    foodGroup.setVelocityXEach(0);
    
    obstacleGroup.setLifetimeEach(-1);
    foodGroup.setLifetimeEach(-1);
    
    monkey.collide(ground);
    monkey.changeAnimation("monkey_S",)
    
    
    
    
  }
    
  if(monkey.isTouching(foodGroup)){
    foodGroup.destroyEach();
    score=score+2;
  }
  
  if(monkey.isTouching(obstacleGroup)){
    gameState=END;
  }
    
    
    
    
    
  
  
  
  
  
  
  
  
  
  
  

  drawSprites();
  
  stroke("white");
  textSize(26);
  text("survivalTime :"+survivalT,400,30);
  
  text("score :"+score,200,60)
}

function obstacles(){
  if(frameCount % 60 === 0){
    obstacle=createSprite(600,365,200,100);
    obstacle.addImage("obstacles",obstacleImage);
    obstacle.scale=0.1;
    obstacle.velocityX=-7;
    obstacleGroup.add(obstacle);
    obstacles.lifeTime=85.7
    
  }
  
}
function bananas (){
  if(frameCount % 80===0){
    
    
     banana=createSprite(600,(random(180,240)),2,2);
  banana.addImage("bananaI",bananaImage);
    banana.velocityX=-7;
    banana.scale=0.1;
    foodGroup.add(banana);
    banana.lifeTime=85.7;
    
  }
  
 
  
  
  
  
  
  
}







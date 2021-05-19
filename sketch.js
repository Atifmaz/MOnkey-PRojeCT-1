var gameState = "play"
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0
var survivalTime = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  ground = createSprite(500,400,1000,35)
  ground.velocityX = -5;
  ground.shapeColor="#4e3620"
  
  monkey = createSprite(50,355,10,10)
  monkey.addAnimation("monkeyyy",monkey_running)
  monkey.scale =0.10
  bananaGroup = createGroup();
  obstaclesGroup = createGroup();
}


function draw() {
 background("#fbe0c4")
  text("SCORE:"+score,45,54)
  
  if(gameState === "play"){
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")&& monkey.y >= 351) {
        monkey.velocityY = -15;
    }
  monkey.velocityY = monkey.velocityY + 0.8 
  spawnBanana();
  spawnObstacles();
  if(monkey.isTouching(bananaGroup)){
     score = score+1
    bananaGroup.destroyEach()
     }
  if(monkey.isTouching(obstaclesGroup)){
     gameState="end"
     }
     }
  else if (gameState === "end"){
        ground.velocityX=0
    monkey.velocityY=0
    bananaGroup.destroyEach()
    obstaclesGroup.destroyEach()
    monkey.pause()
    textSize(20)
    
 text("Game Over",150,200)
           }
          
  console.log(monkey.y)

  
  monkey.collide(ground)
  drawSprites();
}



function spawnBanana() {
  
  if (frameCount % 120 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(200,320));
    banana.addImage(bananaImage);
    banana.scale = 0.10;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
  
    
    //add each cloud to the group
    bananaGroup.add(banana);
  }
} 
function spawnObstacles() {
  //write code here to spawn the clouds
  if (frameCount % 100 === 0) {
    var obstacles = createSprite(600,365,40,10);
    obstacles.addImage(obstacleImage);
    obstacles.scale = 0.10;
    obstacles.velocityX = -3;
    
    
  
    
    //add each cloud to the group
    obstaclesGroup.add(obstacles);
  }
}
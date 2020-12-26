var START=  2;
var PLAY = 1;
var END = 0;
var gameState = START

var survivalTime=0;
var life=0;


var tower;
var rapanzel;
var rapanzel1;
var creepers;
var coin;

var f1,f1Img,f2,f2Img;

var gameOver;



function preload(){

  towerImg = loadImage("tower.png");
  rapanzelImg = loadImage("Rapanzel.png");
  rapanzel1Img = loadImage("Rapanzel1.png");
  creepersImg = loadImage("creeper.png");
  gameOverImg = loadImage("gameOver.png");
  coinImg = loadImage("Gold_coin.png");
  f1Img = loadImage("f1.png");
  f2Img = loadImage("f2.png");
 jungleSound = loadSound("jungleSound.mp4");
}

function setup() {
 createCanvas(600, 400);
  
   jungleSound.loop(); 
  
  
  tower = createSprite(300, 200);
   tower.addImage("tower", towerImg);
  tower.velocityY= 1;
  
  
  rapanzel= createSprite(300, 290, 20, 20);
  rapanzel.addImage(rapanzelImg);
  rapanzel.scale = 0.2;
  
   rapanzel1= createSprite(520, 150, 20, 20);
  rapanzel1.addImage(rapanzel1Img);
  rapanzel1.scale = 0.3;
  
  gameOver = createSprite(300, 200, 10, 10);
  gameOver. addImage(gameOverImg);
  gameOver.Scale = 0.2;

  f1= createSprite(45, 46, 20, 20);
  f1.addImage(f1Img);
  f1.scale = 0.2;
  
  f2= createSprite(550, 350, 20, 20);
  f2.addImage(f2Img);
  f2.scale = 0.4;
  
  
  
  
  rapanzel.setCollider("rectangle",0,0,150,350);
  //rapanzel.debug = true;

  creeperGroup = new Group ();
  coinGroup = new Group();
  monstersGroup = new Group();
  score = 0
  lives = 3
}

function draw() {
 background(0);
   
  if(gameState === START){
    background("lightgreen");
    
    tower.visible = false;
    rapanzel.visible = false;
    creeperGroup.setVelocityEach(0);
   gameOver.visible = false;
    coinGroup.setVelocityEach(0);
    coinGroup.visible = false;
    score.visible=false;
    
    score = 0;
 textSize(2);
  fill("white");
  text(": "+ score, 100,50); 
    
    textSize(20);
    text("Help Rapanzel climb the tower!", 200, 50)
    
    text("Rapanzel wants to climb the tower,", 70, 90);
    
    text("but she always crash with the creeper plants", 70,115);
    
    text("help her climb the tower safely forgot ", 70, 140);
    
    text("dont forget to collect coins in between",70,167);
    
        
    text("INSTRUCTIONS", 70, 230);
    
    
  
    
    
    textSize(18);
    text("press S to start the game.", 70, 250)
    text("use left & right arrow keys to move Rapanzel", 70, 270);
    text("collect all coins ", 70, 290)
    text("don't hit the creepers", 70, 310)
    
    text("you only have three lives", 70, 330)
    
    textSize(25);
    text("BEST OF LUCK !", 300, 360);
    
    
    
    if(keyDown("S")){
      
      gameState = PLAY
    }
  }
  
  if(gameState === PLAY){
    
    survivalTime.visible= true;
   
    
    if(frameCount%50 === 0){
      
      text("survivalTime: "+ survivalTime, 300,50);
    
      score = score+1
    }
     tower.visible = true;
    rapanzel.visible = true;
    lives.visible = true ;
    score.visible=true;
    rapanzel1.visible=false;
    f1.visible=false;
    f2.visible=false;
    
    textSize(20);
  fill("white");
  
    textSize(20);
  fill("white");
  text("survivalTime: "+ survivalTime, 360,50); 
    
    
    
    if(rapanzel.isTouching(coinGroup)){
      
      coinGroup.destroyEach()
    }
    
      if(tower.y> 300){
    tower.y=100
  }
  
  if(keyDown("right")){
    
    rapanzel.x = rapanzel.x+5
  }
  
  if(keyDown("left")){
    
    
    rapanzel.x = rapanzel.x-5
  }
    
    gameOver.visible = false;
  
    if(lives === 0){
      
      gameState = END
    }
    
   
      if(rapanzel.isTouching(creeperGroup))
    {
      lives=lives-1;
      creeperGroup.destroyEach();
     
    }
    }
  
  
    
  if(coinGroup.isTouching(rapanzel)){
      coinGroup.destroyEach();
    score = score + 1;
    }
  
  if(gameState===END){
    
    
    background("purple");
    tower.visible = false;
    rapanzel1.visible=false;
    score.visible=true;
    lives.visible=true;
   
    creeperGroup.setVelocityEach(0);
    creeperGroup.destroyEach();
    
 
    rapanzel.visible = false;
    creeperGroup.visible=false;
    gameOver.visible = true;
    gameOver.Scale=0.4;
   coinGroup.setVelocityEach(0) 
    
    
    
  }
  spawnCoin();
  
spawnCreepers();
  
drawSprites();
  
text("survivalTime: "+ score, 300,30);
  
   text("lives: "+ lives, 100,50);
lives.visible=true;
score.visible=true;

  }
  
function spawnCreepers(){
  
  if(frameCount% 120===0){
    var creepers = createSprite(100, 0, 1, 1)
    creepers.addImage(creepersImg);
    
    creepers.scale = 0.2 ;  
    creepers.velocityY = 3;
    creepers.lifetime = 130;
    creepers.x = Math.round(random(90,560))
    
    
    creeperGroup.add(creepers)
    
  }
}


function spawnCoin(){
  if(frameCount% 150===0){
    var coin = createSprite(120, 0, 1, 1)
    coin.addImage(coinImg);
    
    coin.scale = 0.05 ;   
    coin.velocityY = 3;
    coin.lifetime = 500;
    coin.x = Math.round(random(90,560));
    
    
    coinGroup.add(coin);
    
}
}
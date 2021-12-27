var roadImg,carImg,enemyImg;
var road,car,enemy;
var gamestate = "play";
var enemysGroup;


function preload(){
 roadImg = loadImage("Road.png");   
 carImg =  loadImage("car.jpg");
 enemyImg = loadAnimation("enemy.gif");
 
}

function setup() {
 createCanvas(400,600);

 //bakground infinite
 road=createSprite(200,200);
 road.addImage(roadImg);
 road.velocityY = 4;


//car sprite
car = createSprite(70,520,20,20);
car.addImage("car",carImg);
car.scale =0.5;
enemyGroup = new Group ();
}

function draw() {
 background(0);
 
spawnEnemys();

edges= createEdgeSprites();
car.collide(edges);
        // reset the back ground
        if (road.y > 400 ){
         road.y = height/2;   
        }
    
  if (keyDown("up")) {
    car.y = car.y-2;
      
  } 
  
  
  if (keyDown("down")) {
    car.y = car.y+2;
      
  } 
  
  if (keyDown("left")) {
    car.x = car.x-2;
      
  } 
  
  if (keyDown("right")) {
    car.x = car.x+2;
      
  } 

  if (gamestate ==="play"){}



  
  
  drawSprites();

 if(car.isTouching(enemyGroup)){
    car.destroy();
    enemyGroup.setVelocityXEach(0); 
    enemyGroup.setVelocityYEach(0);
    road.velocityY= 0; 
    textSize(50);
    fill ("blue");
    text("GAMEOVER", 200,200);
     }
     
 }


function spawnEnemys(){
    if (frameCount % 200 === 0 ){
var enemy = createSprite(20,200,10,10);
enemy.y = Math.round(random(10,400));
enemy.velocityX =2; 
enemy.scale =0.3;
enemy.addAnimation("enemy",enemyImg);
enemyGroup.add(enemy);

    }
}
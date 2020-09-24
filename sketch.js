var thickness,wall;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50, 200, 50,20);
  bullet.velocityX=speed;
  bullet.shapeColor="white";
  
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(0);  
  text("X: "+ mouseX,50,50);
  text("Y: "+ mouseY,50,75);

 if (hasCollided(bullet,wall))
 {
   if(bullet.x>1150){
    bullet.x=1160;
   }

  bullet.velocityX = 0;
  
  var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

if (damage>10){
wall.shapeColor=color(255,0,0);
}
 if (damage<10){
  wall.shapeColor=color(0,255,0);
 }
 }

drawSprites(); 
textSize(20);
fill("red");
text("damage:"+ damage,1200,380);
}

function hasCollided(lbullet, lwall)
 {
   bulletRightEdge=lbullet.x+ lbullet.width;
   wallLeftEdge=lwall.x;
   if (bulletRightEdge>=wallLeftEdge){
     return true
   }
   return false;
 }

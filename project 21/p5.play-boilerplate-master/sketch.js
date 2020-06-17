 var  bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  
  bullet=createSprite(50,200,50,20);
  bullet.shapeColor=color(255);
  bullet.velocityX=speed; 
  
  wall=createSprite(1250,250,thickness,300);
  wall.shapeColor=color(80,80,80);
  
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
   
}

function draw() {
  background(0,0,0);
   
  if (wall.x-bullet.x < bullet.width/2+wall.width/2) {
    bullet.velocityX=0;
    var damage= (0.5 * weight * speed * speed)/thickness*thickness*thickness;

    if(damage>10){
    wall.shapeColor="red";
    }
    if(damage<10){
    wall.shapeColor="green";
    }
  }
  
  drawSprites();
}

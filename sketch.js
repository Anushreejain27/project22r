var bullet;
var wall;
var speed, weight;

function setup() {
  createCanvas(1400,400);
  bullet=createSprite(50, 200, 30, 5);
  bullet.shapeColor="white";
  thickness=random(30,70);
 wall=createSprite(1150,200,thickness,160)
  wall.shapeColor="white"
speed=random(75,105)
weight=random(400,1500);




bullet.velocityX=speed

}

function draw() {
  background(100);
  if (hasCollided(bullet,wall)){
    bullet.velocityX=0;

  }
  var deformation=0.5*speed*weight*speed/22509
  if (deformation>180&&bullet.x>300) {
    wall.shapeColor="yellow"
  }
  if (deformation<180&&deformation>100&&bullet.x>300) {
   
    wall.shapeColor="red"
   
 }                                        
   if (deformation<100&&bullet.x>300) {
    wall.shapeColor="green"
   }        




  drawSprites();
}
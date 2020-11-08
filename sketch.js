var car , wall;
var speed , weight;
 
function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50,200,50,50);
  car.velocityX = speed;

  wall = createSprite(1500,200,60,height/2);
  wall.shapecolor = (80,80,80);

}

function draw() {
  background("black");  

  car.collide(wall);

  if(car.collide(wall)){
    
    car.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22500;

    if(deformation > 180){
      car.shapecolor = "red";
    }

    if(deformation < 180 && deformation < 100){
      car.shapecolor = "yellow";
    }

    if(deformation < 100){
      car.shapecolor = "green";
    }
  }

  drawSprites();
}
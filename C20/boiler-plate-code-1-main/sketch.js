var fixedRect,movingRect,fixedRect2,fixedRect3;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  fixedRect2 = createSprite(200, 300, 50, 80)
  fixedRect3 = createSprite(200, 100, 50, 80)

}

function draw() {
  background(0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
if(is_touch(movingRect,fixedRect3)){
  movingRect.shapeColor = "blue";
  fixedRect3.shapeColor = "blue";
}
else{
  movingRect.shapeColor = "white";
  fixedRect3.shapeColor = "white";
}
  
  drawSprites();
}


function setup() {
  createCanvas(800,400);
  square1=createSprite(200, 200, 50, 50);
  square2=createSprite(400,200,60,60)
  square1.shapeColor="red"
  square2.shapeColor="blue"
}

function draw() {
  background(0);  
  square2.x=World.mouseX
  square2.y=World.mouseY
 // console.log(square2.x-square1.x)
  if(isTouching(square2,square1) )
    {
  square2.shapeColor="green"
  square2.width=80
  text("touched",400,200)
  }
  else{
    square2.shapeColor="blue"
    square2.width=60
  }
  drawSprites();
}

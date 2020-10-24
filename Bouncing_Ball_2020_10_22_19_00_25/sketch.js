function setup() {
  createCanvas(400, 400);
}
var x=0;
var speed = 3;
function draw() {
  background(0);
  
  stroke(255);
  strokeWeight(4);
  noFill();
  
  if(x > 150 && x<300) {
    fill(255, 0, 200);
  }
  else if(x>300 && x<width) {
    fill(200,255,0);
  }
  else {
    fill(0,255,200);
  }
  
  ellipse(x,200,30,30)
  x = x+speed;
  if (x >= width || x <= 0) {
    print("OFF THE SCREEN") ;
    speed = -speed;
  }
}
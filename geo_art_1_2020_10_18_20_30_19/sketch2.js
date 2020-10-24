
var colors = {
  r : 0,
  b : 225,
  g : 0
};

var spot = {
  x:0,
  y:0
}

function setup() {
  createCanvas(400, 400);
   background(0);
}

function draw() {
 
   colors.r = map(mouseX,0,400,0,255);
   colors.b = map(mouseX,0,400,255,0);
   colors.g = map (mouseY,0,400,0,255);
  spot.x = random(0,width);
  spot.y = random(0,height);
  fill(colors.r,colors.g,colors.b,100);
  noStroke()
  ellipse(spot.x,spot.y,20,20);

  
}

function mousePressed() {
  background(0);
}
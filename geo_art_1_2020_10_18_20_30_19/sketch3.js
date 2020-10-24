var recX = 0;
var recY = 0;

function setup() {
  createCanvas(400, 400);
  background(200, 10, 180);
}

function draw() {
  fill(0);
  rect(recX, recY, 50, 25);
  recX = recX + 1;
  recY = recY + 1;
}

function mousePressed() {
  background(random(225), random(225), random(225));
  recX = 0;
  recY = 0;
}
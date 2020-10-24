function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(230);
  
  fill(255,204,0);
  noStroke();
  circle(210,190,200);
  fill(75);
  triangle(-100,490,350,175,700,500);
  fill(10,175,200);
  triangle(-50,500,222,290,700,520);
  fill(210,190,0);
  triangle(-10,500,350,375,600,510);
  
}
var offset = 0;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  strokeWeight(4);
  stroke(255);

  for( var i = 0; i<=width ; i+=50) {
    fill(random(255), 0, random(255));
    ellipse(i+offset, 300,25,25);
  }
  offset = offset + 1;
  
}
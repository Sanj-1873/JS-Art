function setup() {
  createCanvas(600, 400);
}
var inside = false;
function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();
  if(mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250) {
    fill(255, 0, 200);
    inside = true;
  }
  else {
    inside = false;
  }
  rectMode(CENTER);
  rect(300, 200, 100, 100);
  
  if (inside && mouseIsPressed) {
    
    
    ellipse(random(250,350) ,random(400), 30, 30)
    noFill();
    rect(300,200,120,500);
    
  }
  
  
  
}
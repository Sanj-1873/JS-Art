function setup() {
  createCanvas(400, 400);
}
var speeds = [2,2.5,3,4,4.5,4,3, 2.5,2]
var x = [15,15,15,15,15,15,15,15,15,15];

function draw() {
  background(0);
var colors = [color(153, 153, 255),color(153, 204, 255),color(102, 204, 255),color(153, 255, 204), color(153, 255, 153),color(153, 255, 153),color(153, 255, 204),color(102, 204, 255),color(153, 204, 255),color(153, 153, 255)];

  var counting = 0;
  for(var y=0; y<height; y+=40) {
    fill(colors[counting]);
    ellipse(x[counting],15+y,20,20);
    counting++;
  }
  
  for(var count = 0; count <= 10; count++) {
    x[count] = x[count] + speeds[count];
    if(x[count]>=width || x[count]<=0) {
      speeds[count] = speeds[count] * -1;
    }
  }
  
  
}
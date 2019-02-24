function setup() {
  createCanvas(400, 400);
  colorMode(HSB, width, height, 100);
}

function draw() {
  var x = random(width);
  var y = random(height);

  for (var x = 0; x < width; x++) {
  stroke(x, y, 100);
  point(x, y);
}
}

// A code that runs 100 times will result in a rainbow. 

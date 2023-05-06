let circleSize = 50;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (let i = 0; i < width; i += circleSize) {
    for (let j = 0; j < height; j += circleSize) {
      let distance = dist(i, j, mouseX, mouseY);
      if (distance < circleSize / 2) {
        fill(255, 0, 0);
      } else {
        fill(0, 0, 255);
      }
      ellipse(i, j, circleSize, circleSize);
    }
  }
}

function mousePressed() {
  if (circleSize < 100) {
    circleSize += 10;
  } else {
    circleSize = 50;
  }
}
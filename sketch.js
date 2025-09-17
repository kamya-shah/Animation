let x, y;     // circle position
let dx, dy;   // movement speed
let circleColor; // current color of circle

function setup() {
  createCanvas(600, 400);
  background(30, 30, 120); // dark blue background
  x = width / 2;
  y = height / 2;
  dx = 2;  // a bit faster
  dy = 2;
  circleColor = color(255, 220, 50); // starting yellow
}

function draw() {
  // keep background fixed
  background(30, 30, 120);

  // draw circle with current color
  fill(circleColor);
  noStroke();
  ellipse(x, y, 80, 80);

  // move circle
  x += dx;
  y += dy;

  // bounce + change color
  if (x > width - 40 || x < 40) {
    dx *= -1;
    circleColor = randomColor(); // new color
  }
  if (y > height - 40 || y < 40) {
    dy *= -1;
    circleColor = randomColor(); // new color
  }
}

// helper function to get a random bright color
function randomColor() {
  return color(random(100, 255), random(100, 255), random(100, 255));
}

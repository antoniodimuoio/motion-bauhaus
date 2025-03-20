function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  ellipseMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background("pink");
  noStroke();

  let yellow = "#FFD700";
  let blue = "#0000FF";
  let red = "#FF0000";

  let size = height / 9;

  let cx = width / 2;
  let cy = height / 2;

  let x = cx + size / 2;
  let y = cy + size * 2;

  let vel = 5;

  //1
  fill("black");
  rect(x, y, size);
  //2
  fill(red);
  let y2 = map(sin(frameCount * vel), -1, 1, size * 7, cy - -size);
  ellipse(x - size, y2, size);
  //3
  fill(blue);
  rect(x - 2 * size, y, size);
  //4
  fill("black");
  rect(x + size, y - size, size);
  //5
  fill(red);
  rect(x, y - size, size);
  //6
  fill("black");
  rect(x + size, y - 2 * size, size);
  //7
  fill(yellow);
  rect(x, y - 2 * size, size);
  //8
  fill(yellow);
  rect(x - size, y - 2 * size, size);
  //9
  fill(red);
  rect(x + size, y - 3 * size, size);
  //10
  fill(red);
  rect(x, y - 3 * size, size);
  //11
  fill(yellow);
  rect(x - size, y - 3 * size, size);

  //12
  let x12 = map(sin(frameCount * vel), -1, 1, size / 2, x - 2 * size);
  fill(red);
  ellipse(x12, y - 3 * size, size);

  //13
  let y13 = map(sin(frameCount * vel), -1, 1, size * 1.5, cy - 3 * size);
  fill(blue);
  ellipse(x, y13, size);

  //14
  fill(yellow);
  rect(x - size, y - 4 * size, size);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

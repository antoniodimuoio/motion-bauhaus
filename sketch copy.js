let mic;
let particles = [];
let colors;

function setup() {
  createCanvas(1080, 1080);
  mic = new p5.AudioIn();
  mic.amp(5);
  mic.start();

  colors = [
    color(255, 102, 102), // Rosso
    color(255, 204, 102), // Arancio
    color(102, 255, 102), // Verde
    color(102, 204, 255), // Azzurro
    color(204, 102, 255), // Viola
  ];

  for (let i = 0; i < 100; i++) {
    particles.push(new Particle(random(width), random(height)));
  }
}

function draw() {
  background(255);
  let vol = mic.getLevel() * 10; // Maggiore sensibilità

  for (let p of particles) {
    p.update(vol);
    p.show();
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(20, 80);
    this.color = random(colors);
    this.speedX = random(-2, 2);
    this.speedY = random(-2, 2);
  }

  update(vol) {
    let force = map(vol, 0, 1, 0, 10);
    let angle = atan2(this.y - height / 2, this.x - width / 2);

    this.x += this.speedX + cos(angle) * force;
    this.y += this.speedY + sin(angle) * force;

    if (this.x > width) this.x = random(width);
    if (this.x < 0) this.x = random(width);
    if (this.y > height) this.y = random(height);
    if (this.y < 0) this.y = random(height);
  }

  show() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.size);
  }
}

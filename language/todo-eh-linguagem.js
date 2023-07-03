function setup() {
  smooth();
  createCanvas(100, 100, WEBGL);
  // Make a <p> element and put it behind the canvas
  let p = createP('I am a dom element');
  p.center();
  p.style('font-size', '20px');
  p.style('text-align', 'center');
  p.style('z-index', '-9999');
}

function draw() {
  background(250, 250, 150);
  fill(15, 195, 185);
  noStroke();
  sphere(30);
  erase();
  rotateY(frameCount * 0.02);
  translate(0, 0, 40);
  torus(15, 5);
  noErase();
  describe(`60×60 centered teal sphere, yellow background.
  Torus rotating around sphere erases to reveal black text underneath.`);
}
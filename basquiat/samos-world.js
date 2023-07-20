let basquiatImg
let crown

function setup() {
	basquiatImg = loadImage('basquiat-blue-lined.png');
	crown = loadImage('crown.png');
  smooth();
  createCanvas(windowWidth, windowHeight, WEBGL);
  // Make a <p> element and put it behind the canvas
  let p = createP('I am a dom element');
  p.center();
  p.style('font-size', '20px');
  p.style('text-align', 'center');
  p.style('z-index', '-9999');
}

function draw() {
  background('#5683F0');
  fill(15, 195, 185);
  noStroke();
  image(basquiatImg, -240, -340, 519, 692);
  erase();
  rotateZ(frameCount * 0.02);
  translate(10, -180, 200);
  image(crown, 0, 0, 80, 80)
  noErase();
  describe(`60×60 centered teal sphere, yellow background.
  Torus rotating around sphere erases to reveal black text underneath.`);
}
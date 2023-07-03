let angle = 0;

function setup() {
	createCanvas(600, 600);
	background(238,238,228);	
}

function draw() {
	numCircles = random(1,4)
	startPositionX = 100
	startPositionY = 400
	
	// translate(50,50)
	
	while (angle <= 200) {
    for (let j = 0; j < numCircles; j++) {
			alteration = j*random(0,100)
			drawCircle(200 + alteration,400 - alteration)
		}
	}
}

function drawCircle(a,b) { // function by asd0999 at https://editor.p5js.org/asd0999/sketches/tIxlznq_8
  stroke(0);
	strokeWeight(random(0,20))
  noFill();
  let x = map(cos(angle), -1, 1, a, b);
  let y = map(sin(angle), -1, 1, a, b);
  point(x, y);
  angle += 0.6;
}
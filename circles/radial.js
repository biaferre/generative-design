let x;
let colorArray = ["#B81856","#FB7B5F","#F9D05E"]
let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noFill();
  x = windowWidth/4;
}

function draw() {
  background(0, 15);
	midFrame = windowHeight/2
	
	for (let i = 0; i < 8; i++) {	
		stroke('white');
		circle(x+(110*i), midFrame, 100)
	}
}
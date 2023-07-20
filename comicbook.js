let a
let b

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	a = random(0,windowWidth)
	b = random(0,windowHeight)
}

function draw() {
	strokeWeight(5);
	curve(100*a, 100*b,mouseX, mouseY, a , b, mouseX + noise(0,100), mouseY + noise(0,100));
}
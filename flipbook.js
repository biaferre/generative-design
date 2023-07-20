let a
let b

function setup() {
	c = createCanvas(windowWidth, windowHeight);
	background(0);
	a = random(100,windowWidth)
	b = random(100,windowHeight)
	
	i = random([-1,1])
}

function draw() {
	strokeWeight(5);
	curve(a*i, b*-i,mouseX, mouseY, a , b, mouseX + noise(0,100), mouseY + noise(0,100));
}

function keyPressed() {
	if (key == 's') {
		saveCanvas(c, 'myflipbook','jpg')
	}
}
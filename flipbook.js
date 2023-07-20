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
	strokeWeight(3);
	curve(windowWidth/2*i, windowHeight/2*-i,mouseX, mouseY, windowWidth/2*-i , windowHeight/2*i, mouseX + random(0,20), mouseY + random(0,20));
}

function keyPressed() {
	if (key == 's') {
		saveCanvas(c, 'myflipbook','jpg')
	}
}
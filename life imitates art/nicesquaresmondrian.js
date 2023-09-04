colors = ['#fac901', '#225095','#dd0100', '#ffffff']

function setup() {
	c = createCanvas(600, 600);		
	background(0);

	strokeWeight(10)
	
	num = random(4,10)
	
	rectMode(CORNER)
	fill(random(colors));
	rect(0, 0, 600, 600);
	
	xPos1 = random(0,600)
	yPos1 = random(0,600)

	xPos2 = random(0, 600)
	yPos2 = random(0, 300)
	
	alterator = 1
	
	for (let j = 0; j < num; j++) { 
		rectMode(CORNERS);
		fill(random(colors))
		rect(xPos1*j*alterator, yPos1*j*alterator, xPos2*random(0,1)*alterator, yPos2*alterator);
		
		alterator*= -1
	}
	
}

function keyPressed() {
	if (key == 's') {
		saveCanvas(c, 'mondrian', 'jpg')
	}
}
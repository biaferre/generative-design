let myFont;
function preload() {
  myFont = loadFont('coolvetica rg.otf');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	textFont(myFont)
	textSize(60)
}

function draw() {
	
	text("bia", mouseX, mouseY);
}
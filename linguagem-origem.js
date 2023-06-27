let myFont;
let fontSize; 
let biArray = [];
let r=0;
const tolerance = 5;
selectedPoint = null;

function preload() {
  myFont = loadFont('coolvetica rg.otf');
	fontSize = 200
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	textFont(myFont)
	textSize(fontSize)

	
	biArray = myFont.textToPoints("palavra", width/2, height/2, fontSize,{
		sampleFactor: 0.8 // default is 0.1
	})	
}

function draw() {
	background(0)	
	stroke(255, 255, 255);

	
 for (let i = 0; i < biArray.length; i++) {
    let myPoint = biArray[i];
    if (myPoint === selectedPoint) {
      push();
      translate(mouseX, mouseY);
      strokeWeight(5);
      line(0, 0, 0, 0);
      pop();
    } else {
      push();
			if (frameCount >= 21) {
				myPoint.y += random(-0.08,0.08)*frameCount
				myPoint.x += random(-0.08,0.08)*frameCount
			}

      translate(myPoint.x, myPoint.y);
      strokeWeight(5);
      line(0, 0, 0, 0);
      pop();
    }
  }
}
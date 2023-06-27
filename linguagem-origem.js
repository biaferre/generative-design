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
		sampleFactor: 0.3 // default is 0.1
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
      translate(myPoint.x, myPoint.y);
      strokeWeight(5);
      line(0, 0, 0, 0);
      pop();
    }
  }
}

function mousePressed() {
  
  let canvasMouseX = mouseX - (windowWidth - width) / 2;
  let canvasMouseY = mouseY - (windowHeight - height) / 2;

  for (let i = 0; i < biArray.length; i++) {
    let myPoint = biArray[i];
    let distance = dist(canvasMouseX, canvasMouseY, myPoint.x, myPoint.y);
    if (distance < tolerance) {
      selectedPoint = myPoint
			break
    }
  }
}

function mouseReleased() {
  selectedPoint = null;
}

function mouseDragged() {
  if (selectedPoint) {
    selectedPoint.x = mouseX - (windowWidth - width) / 2;
    selectedPoint.y = mouseY - (windowHeight - height) / 2;
  }
}

function keyTyped() {

}
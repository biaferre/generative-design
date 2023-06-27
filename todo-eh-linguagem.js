let myFont;
let fontSize; 
let biArray = [];
let r=0;
isPresent = false
const tolerance = 5;

function preload() {
  myFont = loadFont('coolvetica rg.otf');
	fontSize = 200
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	textFont(myFont)
	textSize(fontSize)

	
	biArray = myFont.textToPoints("abcde", width/2, height/2, fontSize,{
		sampleFactor: 0.1 // default is 0.1
	})	

}

function draw() {
	background(220)	
	for (let i = 0; i < biArray.length; i++) {
		push();
		translate(biArray[i].x ,biArray[i].y);
		strokeWeight(5);
		line(0,0,0,0);
		pop();
	}
}

function mouseClicked() {
  isPresent = false;
  
  let canvasMouseX = mouseX - (windowWidth - width) / 2;
  let canvasMouseY = mouseY - (windowHeight - height) / 2;

  for (let i = 0; i < biArray.length; i++) {
    let point = biArray[i];
    let distance = dist(canvasMouseX, canvasMouseY, point.x, point.y);
    if (distance < tolerance) {
      isPresent = true;
      break;
    }
  }

  if (isPresent) {
    print('oiiii');
  }
}
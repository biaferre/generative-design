let myFont;
let fontSize; 
let biArray = [];
let r=0;


function preload() {
  myFont = loadFont('coolvetica rg.otf');
	fontSize = 120
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	textFont(myFont)
	textSize(fontSize)

	
	biArray = myFont.textToPoints("oi", width/2, height/2, fontSize,{
		sampleFactor: 0.1 // default is 0.1
	})

}

function draw() {
	background(220)

	
	for (let i = 0; i < biArray.length; i++) {
		push();
		translate(biArray[i].x,biArray[i].y);
		rotate(r);
		r++;
		strokeWeight(5);
		line(-5,-5,5,5);
		pop();
	}
}
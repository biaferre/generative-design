let myFont;
let fontSize;
let biArray = [];
let r = 0;
const tolerance = 5;
fontSize = 200
selectedPoint = null;

function preload() {
	myFont = loadFont('coolvetica rg.otf');
}

function setup() {
	frameRate(60)

	c = createCanvas(windowWidth, windowHeight);
	textFont(myFont)
	textSize(fontSize)

	allWords = []

}

function draw() {
	background(10)

	translate(-(300 + windowWidth / 3), -300)

	for (let i = 0; i < allWords.length; i++) {
		let word = allWords[i];
		let wordArray = word.array;
		push()
		translate(random(0, windowWidth), random(0, windowHeight));
		startR = random(165);
		startG = random(165);
		startB = random(165);
		stroke(startR, startG, startB);

		fontSize = random(100, 240)


		for (let j = 0; j < wordArray.length; j++) {
			let myPoint = wordArray[j];


			push();
			if (frameCount >= 21) {
				myPoint.y += random(-0.1, 0.1) * (frameCount);
				myPoint.x += random(-0.1, 0.1) * (frameCount);
			}

			translate(myPoint.x, myPoint.y);
			strokeWeight(5);
			line(0, 0, 0, 0);
			pop();
		}
	}
	pop();

}

class Palavra {
	constructor() {
		this.array = biArray = myFont.textToPoints("palavra", width / 2, height / 2, fontSize, {
			sampleFactor: 0.4 // default is 0.1
		})
	}
}

function mouseClicked() {
	newWord = new Palavra();
	allWords.push(newWord);
	translate(mouseX, mouseY);

}


function keyTyped() {
	if (key === 's') {
		saveCanvas(c, 'myCanvas', 'jpg');
	}
}
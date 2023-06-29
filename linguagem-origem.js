let myFont;
let fontSize; 
let biArray = [];
let r=0;
const tolerance = 5;
fontSize = 200
selectedPoint = null;

function preload() {
  myFont = loadFont('coolvetica rg.otf');
}

function setup() {
	frameRate(60)
	angleMode(DEGREES);
	
	c = createCanvas(windowWidth, windowHeight);
	textFont(myFont)
	textSize(fontSize)
	
	allWords = []

}

function draw() {
	background(20)	
	
	translate(-(300 + windowWidth/3),-300)

  for (let i = 0; i < allWords.length; i++) {
    let word = allWords[i];
    let wordArray = word.array;
		push()
		translate(random(0, windowWidth), random(0, windowHeight));
			startR = random(165);
  		startG = random(165);
  		startB = random(165);
			stroke(startR, startG, startB);
		
			fontSize = random(100,240)


    for (let j = 0; j < wordArray.length; j++) {
      let myPoint = wordArray[j];

      if (myPoint === selectedPoint) {
        push();
        translate(mouseX, mouseY);
        strokeWeight(5);
        line(0, 0, 0, 0);
        pop();
      } else {
        push();
        if (frameCount >= 42) {
          myPoint.y += random(-0.1, 0.1) * (frameCount);
          myPoint.x += random(-0.1, 0.1) * (frameCount);
        }

        translate(myPoint.x, myPoint.y);
        strokeWeight(3);
				lineOrigin = random(-1,1)
        line(lineOrigin, lineOrigin, -lineOrigin, -lineOrigin);
				rotate(frameCount*0.1)
        pop();
      }
    }
		pop();
	}
	
	if (frameCount%5 == 0) {
  newWord = new Palavra();
  allWords.push(newWord);
	}
}

class Palavra {
	constructor () {
		this.array = biArray = myFont.textToPoints("palavra", width/2, height/2, fontSize,{
			sampleFactor: 0.4 // default is 0.1
		})	
	}
}

function keyTyped() {
  if (key === 's') {
		saveCanvas(c, 'myCanvas', 'jpg');
  }
}
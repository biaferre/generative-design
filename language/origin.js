let myFont;
let fontSize; 
let biArray = [];
let r=0;
const tolerance = 5;
fontSize = 300
selectedPoint = null;

function preload() {
  myFont = loadFont('glashou.ttf');
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
		wordLife = 0 // possibility to make new words appear still with form
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
				lineOrigin = random(-5,5) 

        if (frameCount >= 42) {
          myPoint.y += random(-0.1, 0.1) * (frameCount);
          myPoint.x += random(-0.1, 0.1) * (frameCount);
					lineOrigin += frameCount*0.1
        }

        translate(myPoint.x, myPoint.y);
        strokeWeight(2);
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
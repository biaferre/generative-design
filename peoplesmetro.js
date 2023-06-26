function generateFront(varScale) {
	let space = varScale/2

startR = random(165);
startG = random(165);
startB = random(165);

for(x=0; x<width + 50; x+= space){
	for(y=0; y<height+50;y+= space){
		
		fill (
		  random(startR, startR + 180),
	random(startG, startG + 90),
	random(startB, startB + 90)
		)
		
		let a = random(11)
		
		textSize(varScale);
		text(symbols[floor(a)], x, y)
	}
}
}

function generateBack(varScale) {
let space = varScale

startR = random(165);
startG = random(165);
startB = random(165);
for(x=0; x<width + 50; x+= space){
	for(y=0; y<height+50;y+= space){
		
		fill (
		  random(startR, startR - 180),
	random(startG, startG - 90),
	random(startB, startB - 90)
		)
		
		let a = random(11)
		
		textSize(varScale);
		text(symbols[floor(a)], x, y)
	}
}
}


function setup() {
c = createCanvas(windowWidth, windowHeight)

symbols = ['╣', '╝','║','╗','╔','╩','═','╬','╚','╠','╦']

background("white");

let varScale = floor(random(100))

generateBack(varScale)
generateFront(varScale)
}

function keyTyped() {
if (key === 's') {
	saveCanvas(c, 'myCanvas', 'jpg');
}
}
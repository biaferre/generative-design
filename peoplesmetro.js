import p5 from 'p5'

function setup() {
	createCanvas(windowWidth, windowHeight);
	col = ["red","yellow","green","orange","purple","blue","pink"]
	symbols = ['╣', '╝','║','╗','╔','╩','═','╬','╚','╠','╦']
	startR = random(165);
  startG = random(165);
  startB = random(165);
	
	let space = 16
	for(x=0; x<width + 50; x+= space){
		for(y=0; y<height+50;y+= space){
			stroke(col[floor(random(5))])
			fill(col[floor(random(5))])
			
			// fill(
			// random(startR, startR + 90),
			// random(startG, startG + 90),
			// random(startB, startB + 90)
			// );
			
			let c = random(11)
			
			textSize(32);
			text(symbols[floor(c)], x, y)
		}
	}
}

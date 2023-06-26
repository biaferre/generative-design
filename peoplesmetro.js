function setup() {
	c = createCanvas(windowWidth, windowHeight)
	
	symbols = ['╣', '╝','║','╗','╔','╩','═','╬','╚','╠','╦']
	col = ["red","yellow","green","orange","purple","blue","pink"]

	startR = random(165);
  startG = random(165);
  startB = random(165);
	
	background("white");
	
	let varScale = random(50)

	let space = varScale/2
	for(x=0; x<width + 50; x+= space){
		for(y=0; y<height+50;y+= space){
			
			stroke(col[floor(random(5))])
			fill(col[floor(random(5))])
			
			
			let a = noise(11)
			
			textSize(varScale);
			text(symbols[floor(a)], x, y)
		}
	}
}

function keyTyped() {
  if (key === 's') {
		saveCanvas(c, 'myCanvas', 'jpg');
  }
}

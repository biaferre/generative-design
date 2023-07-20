alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
cores = [[227, 14, 0, 80],[227, 0, 205, 80],[227, 109, 0, 80]];
musica = ['se', 'o', 'que', 'nos', 'consome','fosse', 'apenas', 'fome', 'cantaria','o','pão']

function setup() {
	a = 0
	x = 0;
	y = 200;
	
	c = createCanvas(488, 488);
	background('#FFE0EB');
	textFont('Helvetica-Bold', 360);
}

function draw() {	
	for (let i = 1; i <= 3; i++) {
		if (i%3 === 0 && i !== 0) {
			y += 130;
			x = 0;
		}
		for (let j = 0; j < 3; j++) {
			letra = random(alfabeto);

			fill(cores[j]);
			text(letra, x, y);
			x += 160;
		}
	}
}

function mouseClicked() {
	if (a == musica.length) {
		a = 0
	}
	palavra = musica[a]
	textFont('Helvetica-Bold', 30);
	fill('#0017E3')
	text(palavra, mouseX, mouseY)
	
	a+= 1;
}

function keyPressed() {
	if (key == 's') {
		saveCanvas(c, 'palavraAcesa', 'jpg')
	}
}
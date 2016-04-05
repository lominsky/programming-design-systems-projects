var r = new Rune({
  container: "#canvas",
  width: 1600,
  height: 1600,
  debug: true
});

var black = new Rune.Color(30, 30, 30);
var white = new Rune.Color(255, 255, 255);

carpet(0, 0, r.width, r.height);

r.draw();

function carpet(x, y, w, h) {
	r.rect(x, y, w, h)
		.stroke(false)
		.fill(black);
	r.rect(x + w / 3, y + h / 3, w / 3, h / 3)
		.stroke(false)
		.fill(white);

	if(w > 3 && h > 3) {
		for(var i = 0; i < 3; i++)
			for(var j = 0; j < 3; j++)
				if(!(i == 1 && j == 1))
					carpet(x + i * w / 3, y + j * h / 3, w / 3, h / 3);
	}
}
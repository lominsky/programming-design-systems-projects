var squareSize = 70;
var gridWidth = 8;

var r = new Rune({
  container: "#canvas",
  width: squareSize * gridWidth,
  height: squareSize * gridWidth,
  debug: true
});

for(var i = 0; i < 110; i++) {
	var x = i % gridWidth;
	var y = Math.floor(i / gridWidth);

	r.rect(x * squareSize, y * squareSize, squareSize, squareSize)
		.stroke(false)
		.fill(255 * ((x + y + 0) % 2))
}


r.draw();
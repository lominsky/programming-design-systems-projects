var r = new Rune({
  container: "#canvas",
  width: 1600,
  height: 1600,
  debug: true
});

var black = new Rune.Color(30, 30, 30);

var width = 300;
tree(r.width / 2 - width / 2, r.height/2, width, 0);

r.draw();

//x, y is bottom left
function tree(x, y, w, rot) {
	var rect = r.polygon(x, y)
		.lineTo(0, 0)
		.lineTo(0, -w)
		.lineTo(w, -w)
		.lineTo(w, 0)
		.stroke(false)
		.fill(black);

	console.log(rect);
}
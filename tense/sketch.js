var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});

r.rect(0,0,r.width,r.height).fill(178);
var xVariance = 20;

var left = r.polygon(0,0)
	.lineTo(0,0)
	.lineTo(r.width / 2, 0)
	.fill(0);

//var sections Math.round(Rune.random(5, 10))
console.log("Left");
var sections = 20;
for(i = sections; i > 0; i--) {
	var x = Math.round(Rune.random(-1 * xVariance, xVariance)) + r.width / 2;
	var y = r.height - r.height*i/sections;
	left.lineTo(x, y);
	console.log(".lineTo(" + x + ", " + y + ")");
}
	left.lineTo(r.width / 2, r.height)
	.lineTo(0, r.height)

var right = r.polygon(0, 0)
	.lineTo(r.width, 0)
	.lineTo(r.width, r.height)
	.lineTo(r.width / 2, r.height)
	.fill(255)

//var = Math.round(Rune.random(5, 10))
console.log("Right");
sections = 20;
for(i = sections; i > 0; i--) {
	var x = Math.round(Rune.random(-1 * xVariance, xVariance)) + r.width / 2;
	var y = r.height*i/sections;
	right.lineTo(x, y);
	console.log(".lineTo(" + x + ", " + y + ")");
}

	right.lineTo(r.width / 2, 0)

r.draw();
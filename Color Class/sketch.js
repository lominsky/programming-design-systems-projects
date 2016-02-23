var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});

r.circle(350,350,100,100)
	.fill("hsv", 0, 100, 100, .5)
	.stroke(false)

r.circle(450,350,100,100)
	.fill("hsv", 120, 100, 100, .5)
	.stroke(false)

r.circle(400,450,100,100)
	.fill("hsv", 240, 100, 100, .5)
	.stroke(false)

r.draw();
var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});


var leftColor, rightColor
getColors(false);

var left = r.polygon(0,0)
	.lineTo(0,0)
	.lineTo(r.width / 2, 0)
	.lineTo(408, 0)
	.lineTo(411, 40)
	.lineTo(419, 80)
	.lineTo(393, 120)
	.lineTo(381, 160)
	.lineTo(386, 200)
	.lineTo(411, 240)
	.lineTo(417, 280)
	.lineTo(404, 320)
	.lineTo(400, 360)
	.lineTo(401, 400)
	.lineTo(415, 440)
	.lineTo(415, 480)
	.lineTo(390, 520)
	.lineTo(402, 560)
	.lineTo(420, 600)
	.lineTo(403, 640)
	.lineTo(384, 680)
	.lineTo(400, 720)
	.lineTo(411, 760)
	.lineTo(r.width / 2, r.height)
	.lineTo(0, r.height)
	.fill(leftColor)
	.stroke(false);

var right = r.polygon(0, 0)
	.lineTo(r.width, 0)
	.lineTo(r.width, r.height)
	.lineTo(r.width / 2, r.height)
	.lineTo(413, 800)
	.lineTo(394, 760)
	.lineTo(416, 720)
	.lineTo(402, 680)
	.lineTo(395, 640)
	.lineTo(394, 600)
	.lineTo(400, 560)
	.lineTo(387, 520)
	.lineTo(403, 480)
	.lineTo(405, 440)
	.lineTo(386, 400)
	.lineTo(395, 360)
	.lineTo(407, 320)
	.lineTo(417, 280)
	.lineTo(402, 240)
	.lineTo(395, 200)
	.lineTo(390, 160)
	.lineTo(392, 120)
	.lineTo(395, 80)
	.lineTo(416, 40)
	.lineTo(r.width / 2, 0)
	.fill(rightColor)
	.stroke(false);

r.draw();

function getColors(isTense) {
	leftColor = new Rune.Color('hsv', Rune.random(360), 100, 100);
	rightColor = leftColor.copy();
	if(isTense) {
		rightColor.rotate(180);
	}
	else {
		rightColor.rotate(10);
		if(Rune.random(1) > .5)
			rightColor.darken(.2);
		else
			leftColor.darken(.2);
	}
}
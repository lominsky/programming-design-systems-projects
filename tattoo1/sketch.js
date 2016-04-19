var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});

var shiftX = 150;
var shiftY = 200;

var count = 5;

function draw() {
	r.stage.children = [];

	for(var i = 0; i < count; i++)
		t(400, 300, i*360/count);
	 
	r.draw();
}

function t(topX, topY, rotation) {
	centerY = topY + shiftY/2;
	var tri = r.triangle(topX, topY, topX+shiftX, topY+shiftY, topX-shiftX, topY+shiftY)
		.fill(false)
		.stroke(0, 0, 0)
		.strokeWidth(5)
		.rotate(rotation, topX, centerY);
}

function addTriangle() {
	count++;
	draw();
}

function removeTriangle() {
	if(count > 0)
		count--;
	draw();
}

function increaseWidth() {
	shiftX += 10;
	draw();
}

function decreaseWidth() {
	if(shiftX > 10)
		shiftX -= 10;
	draw();
}
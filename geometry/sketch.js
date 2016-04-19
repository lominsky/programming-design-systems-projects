var r = new Rune({
  container: "#canvas",
  width: 2000,
  height: 2000,
  debug: true
});

var g = r.group(0, 0);

var shiftX = 150;
var shiftY = 200;

var count = 5;

function draw(x, y, w, c) {
	var count = c;
	var width = w*10
	for(var i = 0; i < count; i++)
		t(400, 300, i*360/count);
	 
	r.draw();
}

function t(topX, topY, rotation) {
	centerY = topY + shiftY/2;
	var tri = r.triangle(topX, topY, topX+shiftX, topY+shiftY, topX-shiftX, topY+shiftY, g)
		.fill(false)
		.stroke(0, 0, 0)
		.strokeWidth(5)
		.rotate(rotation, topX, centerY);
}

function addTriangle() {
	clearG();
	count++;
	draw();
	//r.draw();
}

function removeTriangle() {
	clearG();
	if(count > 0)
		count--;
	draw();
}

function increaseWidth() {
	clearG()
	shiftX += 10;
	draw();
}

function decreaseWidth() {
	clearG()
	if(shiftX > 10)
		shiftX -= 10;
	draw();
}

function clearG() {
	for(var i = g.children.length-1; i >= 0; i--) {
		g.remove(g.children[i]);
	}
}
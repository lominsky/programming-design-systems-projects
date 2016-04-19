var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});

var numShapes = 4;
var sides = 4;
var radius = r.width/4;
var rotation = 10;


function draw() {
	r.stage.children = [];

	for(var i = 0; i < numShapes; i++)
		drawShape(sides, radius, rotation * i);
	r.draw();
	console.log(r);
}

function drawShape(sides, radius, rotation) {
	var path = r.path(r.width / 2, r.height / 2)
		.moveTo(radius, 0);

	for(var i = 1; i <= sides; i++)
		path.lineTo(Math.cos(Rune.radians(i * 360 / sides)) * radius, Math.sin(Rune.radians(i * 360 / sides)) * radius);

	path.closePath()
		.fill(false)
		.strokeWidth(5)
		.rotate(rotation, r.width / 2, r.height / 2);
}

function addSide() {
	sides++;
	draw();
}

function removeSide() {
	if(sides > 2)
		sides--;
	draw();
}

function increaseRotation() {
	rotation += 5;
	draw();
}

function decreaseRotation() {
	rotation -= 5;
	draw();
}

function addShape() {
	numShapes++;
	draw();
}

function removeShape() {
	if(numShapes > 1)
		numShapes--;
	draw();
}

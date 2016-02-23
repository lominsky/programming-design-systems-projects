var r = new Rune({
  container: "#canvas",
  width: 1000,
  height: 300,
  debug: false
});

var radius = 10;
var numCircles = 10000;
var backgroundHue = 00;
var textHue = 20;
var circles = [];

var f = new Rune.Font("arial.ttf");

f.load(function(err) {
 	var word = f.toPath("Color", r.width/5, r.height*3/4, 250)
    .fill(255);
    r.stage.add(word);
    var wordPoly = word.toPolygons({ spacing:25 });

	for(var i = 0; i < numCircles; i++) {
		circles[i] = generateCircle(i);
	}


    for(var i = 0; i < circles.length; i++) {
    	for(j = 0; j < wordPoly.length; j++) {
    		if(wordPoly[j].contains(circles[i].vars.x,circles[i].vars.y)) {
    			circles[i].fill('hsv', Rune.random(backgroundHue+textHue-5, backgroundHue+textHue+5), Rune.random(85, 100), Rune.random(55, 75));
    		}
    	}
    }

	r.draw();
});

function generateCircle(index) {
	var x = Math.round(Rune.random(0,r.width));
	var y = Math.round(Rune.random(0,r.height));
	for(var i = 0; i < index; i++) {
		var xo = circles[i].vars.x;
		var yo = circles[i].vars.y;
	}
	return r.circle(x, y, radius).stroke(false).fill('hsv', Rune.random(backgroundHue-5, backgroundHue+5), Rune.random(85, 100), Rune.random(55, 75));
}

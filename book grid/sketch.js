var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 1200,
  debug: false
});

var magenta = new Rune.Color(230, 0, 230);
var black = new Rune.Color(30);
var background = new Rune.Color(247, 240, 224);

function woman(x, y, s, notThatKindOfGirl) {
	var g = new Rune.Group(x, y);
	var c = new Rune.Color(black);
	if(!notThatKindOfGirl)
		c = magenta;

	r.ellipse(0, 0, 65, 65, g)
		.fill(c)
		.stroke(false);

	r.path(0, 0, g)
		.moveTo(0, 45)
		.lineTo(30, 45)
		// .lineTo(80, 75)
		.curveTo(60, 45, 75, 95)
		.lineTo(96, 165)
		.lineTo(74, 175)
		.lineTo(50, 95)
		.lineTo(40, 95)
		.lineTo(82, 245)
		.lineTo(-82, 245)
		.lineTo(-40, 95)
		.lineTo(-50, 95)
		.lineTo(-74, 175)
		.lineTo(-96, 165)
		.lineTo(-75, 95)
		.curveTo(-60, 45, -30, 45)
		.closePath()
		.fill(c)
		.stroke(false);

	r.ellipse(85, 170, 24.12, 24.12, g)
		.fill(c)
		.stroke(false);

	r.ellipse(-85, 170, 24.12, 24.12, g)
		.fill(c)
		.stroke(false);

	r.rect(5, 240, 30, 115, g)
		.fill(c)
		.stroke(false);

	r.rect(-35, 240, 30, 115, g)
		.fill(c)
		.stroke(false);

	r.ellipse(-20, 355, 30, 30, g)
		.fill(c)
		.stroke(false);

	r.ellipse(20, 355, 30, 30, g)
		.fill(c)
		.stroke(false);

	g.scale(s);
	return g;
}

function cross(x, y, d, notThatKindOfGirl) {
	var g = new Rune.Group(x, y);
	var c = new Rune.Color(black);

	if(!notThatKindOfGirl)
		c = magenta;

	r.ellipse(0, 0, d, d, g)
		.fill(false)
		.stroke(c)
		.strokeWidth(35)

	r.line((d/2)*Math.cos(Rune.degrees(45)), (d/2)*Math.sin(Rune.degrees(-45)), -(d/2)*Math.cos(Rune.degrees(45)), -(d/2)*Math.sin(Rune.degrees(-45)), g)
		.stroke(c)
		.strokeWidth(35)

	return g;
}


var f = new Rune.Font("toledo.ttf");

f.load(function(err) {
	r.rect(-1,-1,r.width+2, r.height+2).stroke(false).fill(background);

	var g = new Rune.Grid({
		x: 10,
		y: 10,
		columns: 3,
		rows: 4,
		width: r.width-20,
		height: r.height-20,
		gutter: 10
	});
	r.stage.add(g);

	var textX = Math.round(Rune.random(1,4));
	var textY = Math.round(Rune.random(1,2));
	var crossX, crossY;
	getCrossPos();

	for(var i = 1; i <= g.vars.rows; i++) {
		for(var j = 1; j <= g.vars.columns; j++) {
			if(crossX == i && crossY == j) {
				g.add(woman((g.vars.moduleWidth/2), ((g.vars.moduleHeight-277*(r.height/2400))/2 - 32*(r.height/2400)), r.height/2400, false), j, i);
				//g.add(cross(Math.round(g.vars.moduleWidth/2), Math.round(g.vars.moduleHeight/2), g.vars.moduleWidth*3/4, false), j, i);
			} else if(!(j == textY && i == textX) && !(j == textY+1 && i == textX)) {
				g.add(woman(g.vars.moduleWidth/2, (g.vars.moduleHeight-277*(r.height/2400))/2 - 32*(r.height/2400), r.height/2400, true), j, i);
			} else if(j == textY && i == textX) {
				var words = text(30, 120);
				for(k in words)
					g.add(words[k], j, i);
			}
		}
	}

	r.draw();

	function text(x, y) {
		var array = []
		var textSize = 80
		var not = f.toPath("NOT", x, y, textSize).stroke(false).fill(black);
		array.push(not);
		var that = f.toPath("THAT", x + 160, y, textSize).stroke(false).fill(magenta);
		array.push(that);
		var kind = f.toPath("KIND", x, y+textSize+10, textSize).stroke(false).fill(black);
		array.push(kind);
		var Of = f.toPath("OF", x + 175, y+textSize+10, textSize).stroke(false).fill(black);
		array.push(Of);
		var girl = f.toPath("GIRL", x + 280, y+textSize+10, textSize).stroke(false).fill(magenta);
		array.push(girl);

    	return array;
	}

	function getCrossPos() {
		crossX = Math.round(Rune.random(1,4));
		crossY = Math.round(Rune.random(1,3));

		if((crossY == textY && crossX == textX) ||  (crossY == textY+1 && crossX == textX)) {
			getCrossPos();
	}
}
});


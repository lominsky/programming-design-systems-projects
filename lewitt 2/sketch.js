var l = 7;
var black = new Rune.Color(30, 30, 30);
var white = new Rune.Color(255, 255, 255);

var r = new Rune({
  container: "#canvas",
  width: 7*100,
  height: 7*100,
  debug: false
});

var s = r.width/l;

var p = [];
for(var i = 0; i < l; i++) {
	var t = []
	for(var j = 0; j < l; j++) {
		var x = Rune.random(j * s, j * s + s);
		var y = Rune.random(i * s, i * s + s);
		t.push(new Rune.Vector(x, y));
	}
	p.push(t);
}

for(i in p)
	for(j in p[i])
		for(k in p)
			for(l in p[k])
				r.line(p[j][i].x, p[j][i].y, p[l][k].x, p[l][k].y)
					.stroke(black)
					.strokeWidth(1);
					
r.draw();
var r = new Rune({
  container: "#canvas",
  width: 3*300*15,
  height: 16*300,
  debug: false
});

var columns = 15;
//var width = Rune.random(1, r.width/(columns*5));
var width = 10;

var grid = r.grid({
  x: 0,
  y: 0,
  width: r.width,
  height: r.height,
  gutter: 0,
  columns: columns,
  rows: 1
});
var c = grid.modules;

//C1
black(c[0]);

//C2
yellow(c[1]);

//C3
red(c[2]);

//C4
blue(c[3]);

//C5
black(c[4]);
yellow(c[4]);

//C6
black(c[5]);
red(c[5]);

//C7
black(c[6]);
blue(c[6]);

//C8
yellow(c[7]);
red(c[7]);

//C9
yellow(c[8]);
blue(c[8]);

//C10
red(c[9]);
blue(c[9]);

//C11
black(c[10]);
yellow(c[10]);
red(c[10]);

//C12
black(c[11]);
yellow(c[11]);
blue(c[11]);

//C13
black(c[12]);
red(c[12]);
blue(c[12]);

//C14
yellow(c[13]);
red(c[13]);
blue(c[13]);

//C15
black(c[14]);
yellow(c[14]);
red(c[14]);
blue(c[14]);


r.draw();

function black(p) {
	for(var i = 0; i < r.width / columns; i += 2 * width) {
		r.line(i, 0, i, r.height, p)
			.strokeWidth(width)
			.stroke(0, 0, 0);
	}
}
function yellow(p) {
	for(var i = 0; i < r.height; i += 2 * width) {
		r.line(0, i, r.width / columns, i, p)
			.strokeWidth(width)
			.stroke(255, 255, 0);
	}
}
function red(p) {
	for(var i = 0; i < r.height + r.width / columns; i += 2 * width) {
		r.line(0, i, r.width / columns, i - r.width / columns, p)
			.strokeWidth(width)
			.stroke(255, 0, 0);
	}
}
function blue(p) {
	for(var i = 0 - r.width / columns; i < r.height; i += 2 * width) {
		r.line(0, i, r.width / columns, i + r.width / columns, p)
			.strokeWidth(width)
			.stroke(0, 0, 255);
	}
}
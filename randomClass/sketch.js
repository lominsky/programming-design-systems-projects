var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});

var temp = 'hello.';

Math.seedrandom(temp);
for(var i = 0; i < 10; i++)
	console.log(Rune.random(10));


r.draw();
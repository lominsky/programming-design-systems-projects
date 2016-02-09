var w = 800;

var r = new Rune({
  container: "#canvas",
  width: w,
  height: w,
  debug: false
});

var background = r.rect(0, 0, w, w).fill(0).stroke(false);
var arm = r.triangle(200, -1, w+1, -1, w+1, 160).fill(255);

var controlX = 10;
var controlY = 5;
var needleX = (w/2)-100;
var needleY = w/4;
var needle = r.path(needleX, needleY)
  .curveTo(controlX, controlY, 0, 300)
  .curveTo(-1 * controlX, controlY, 0, 0)
  .closePath()
  .moveTo(0, 15)
  .curveTo(2, 23, 0, 31)
  .curveTo(-2, 23, 0, 15)
  .fill(255)
  .fillRule("evenodd")
  .rotate(-20, needleX, needleY);

var puddleX = w/2;
var puddleY = 600;
var ring = r.path(puddleX, puddleY)
  .curveTo(50, -20, 150, 30, 130, 70)
  .curveTo(100, 130, 70, 100, 20, 130)
  .curveTo(-20, 160, -70, 130, -120, 100)
  .curveTo(-240, 20, -40, 20, 0, 0)
  .fill(255)
  .stroke(false);
ring.copy().scale(.9).fill(0).move(puddleX, puddleY+5);
ring.copy().scale(.89).move(puddleX, puddleY+6);
ring.copy().scale(.75).fill(0).move(puddleX, puddleY+15);
ring.copy().scale(.74).move(puddleX, puddleY+16);
ring.copy().scale(.5).fill(0).move(puddleX, puddleY+28);
ring.copy().scale(.49).move(puddleX, puddleY+29);
var innerRing = ring.copy().scale(.2).fill(0).move(puddleX, puddleY+44);
ring.copy().scale(.19).move(puddleX, puddleY+45);

var drop = r.path(w/2, puddleY-25)
  .curveTo(20, 15, 25, 50, 25, 70)
  .curveTo(20, 100, 0, 100)
  .curveTo(-20, 100, -25, 70)
  .curveTo(-25, 50, -20, 15, 0, 0)
  .fill(255)
  .stroke(0)
  .scale(.5)
  .strokeWidth(.4);


r.draw();

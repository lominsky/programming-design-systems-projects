var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});

r.rect(0, 0, 800, 800)
  .fill(0)
  .stroke(false)

for(var i = 0; i < 3; i++) 
{
  var x, y, c;
  if(i == 0)
  {
    x = 350;
    y = 300;
    c = 255;
  } else if(i == 1) {
    x = 400;
    y = 190;
    c = 255;
  } else {
    x = 450;
    y = 280;
    c = 255;
  }
  r.ellipse(x, y, 200, 200)
    .fill(c)
    .stroke(false)
}

r.triangle(300, 350, 500, 350, 400, 710)
  .fill(255)
  .stroke(false)

r.draw();
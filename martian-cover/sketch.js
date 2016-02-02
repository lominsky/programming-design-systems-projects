var r = new Rune({
  container: "#canvas",
  width: 850,
  height: 1100,
  debug: true
});

//Background
r.rect(0, 0, r.width, r.height).fill(0);

//Planet
r.ellipse(80, 1050, 600, 600).fill(255);

//Groups
var morse = r.group(0, 0);
var ship = r.group(100, 100);

//Morse Code
var morseColor = 0;
var dot = r.ellipse(0, 0, 50, 50).fill(morseColor).stroke(false);
var dash = r.rect(0, 0, 60, 20).fill(morseColor).stroke(false);
morse.add(dot);
morse.add(dash);
dot.move(-10000, -10000);
dash.move(-10000, -10000);
var centerX = 150;

//I
dot.copy().move(0+centerX, 0);
dot.copy().move(65+centerX, 0);

//AM
//A
dot.copy().move(175+centerX, 0);
dash.copy().move(210+centerX, -10);
//M
dash.copy().move(300+centerX, -10);
dash.copy().move(370+centerX, -10);

//ALIVE
//A
dot.copy().move(0, 70);
dash.copy().move(35, 60);
//L
dash.copy().move(120, 60);
dot.copy().move(215, 70);
dot.copy().move(270, 70);
//I
dot.copy().move(340, 70);
dot.copy().move(395, 70);
//V
dot.copy().move(465, 70);
dot.copy().move(520, 70);
dot.copy().move(575, 70);
dash.copy().move(610, 60);
//E
dot.copy().move(720, 70);

morse.move(80, 900).scale(.15).rotate(-20, 80, 900);




//Draw
r.draw();
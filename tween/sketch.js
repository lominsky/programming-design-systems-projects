var r = new Rune({
  container: "#canvas",
  width: 500,
  height: 500,
  debug: true
});

var myCircle = r.circle(100, 100, 30);

function step1() { TweenLite.to(myCircle.vars, 1, { x:400, onComplete:step2 }); }
function step2() { TweenLite.to(myCircle.vars, 1, { y:400, onComplete:step3 }); }
function step3() { TweenLite.to(myCircle.vars, 1, { x:100, onComplete:step4 }); }
function step4() { TweenLite.to(myCircle.vars, 1, { y:100, onComplete:step1 }); }

step1();

r.play();
var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 600,
  debug: false
});

var f = new Rune.Font("Vollkorn-Regular.ttf");

f.load(function(err) {
	//r.rect(20, 20, r.width-40, r.height-40).fill(false).stroke(0,0,0);
	var location = [300, 400];
	var text = text(48);
	for(i in text)
		r.stage.add(text[i]);
	tree(20, 210, 4, 100, 70, 20);
	

	r.draw();

	function text(textSize) {
		var x = location[0];
		var y = location[1];
		var array = [];
		var shire = f.toPath("Shire", x, y-textSize*2, textSize).stroke(false).fill(0,0,0);
		array.push(shire);
		var village = f.toPath("Village", x, y-textSize*1, textSize).stroke(false).fill(0,0,0);
		array.push(village);
		var camp = f.toPath("Camp", x, y-textSize*0, textSize).stroke(false).fill(0,0,0);
		array.push(camp);

    	return array;
	}

	//trunkWidth sets the width of the trunk and takes a value from 20 to 40
	//treeHeight sets the total height of the tree and takes a value from 150 to 300
	//triNumber sets the number of bough in the tree and takes a value from 1 to 10
	//triMin sets the minimum width of the boughs and takes a value from 1 to 100
	//triMax sets the maximum width of the boughs and takes a value from 1 to 100
	//triDist sets the distance between the boughs and takes a value from 1 to 100
	function tree(trunkWidth, treeHeight, triNum, triMin, triMax, triDist) {
		if(triMin > triMax) {
			var temp = triMin;
			triMin = triMax;
			triMax = temp;
		}

		var x = location[0];
		var y = location[1];
		var trunkX = x-triMax*4/5;
		var trunkY = y-treeHeight+triMax;
		var treeCenter = trunkX+trunkWidth/2;
		var treeTop = y-treeHeight;
		var triSizeDif = (triMax - triMin)/triNum;

		r.rect(trunkX, trunkY, trunkWidth, y-trunkY).fill(0,0,0);
		for(i = 0; i < triNum; i++)
			r.triangle(treeCenter, treeTop+triDist*i, treeCenter-(triMin+triSizeDif*i)/2, treeTop+(triDist*i)+triMax+(triSizeDif*i), treeCenter+(triMin+triSizeDif*i)/2, treeTop+(triDist*i)+triMax+(triSizeDif*i)).fill(0,0,0);
	}
});

function map(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}


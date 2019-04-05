var count = 0;
var tree = [];
var leaves = []
var drops = new Array(500);

function setup() {
	createCanvas(800, 400);
	
	for(var i = 0; i < drops.length; i++)  {
		drops[i] = new Drop(); 
	}
	
	var a = createVector(width/2, height);
	var b = createVector(width/2, height - 100);
	var root = new Branch(a, b);

	tree[0] = root;

}

function draw() {
	
	background(230, 230, 250);
	strokeWeight(1);
	
	var someLeaves;
	var isTreeDone = false;
	
	if(count < 10)
	{
		for (var i = tree.length - 1; i >= 0; i--) {
			if(!tree[i].finished) {
				tree.push(tree[i].branchA());
				tree.push(tree[i].branchB());
			}
			tree[i].finished = true;
		}
	}
	
	if(count === 10){
		for(var i = 0; i < tree.length; i++) {
			if(! tree[i].finished) {
				var leaf = tree[i].end.copy();
				someLeaves = random(0, 5);
				if(someLeaves < 1) {
					leaves.push(leaf);
				}
			}
		}
	}
	count++;
	
	if(!isTreeDone)
	for(var i = 0; i < tree.length; i++) {
		tree[i].show();
		isTreeDone = true;
	}
	
	for(var i = 0; i < drops.length; i++)	{
		drops[i].fall();
		drops[i].show();
	}
	
	for(var i = 0; i < leaves.length; i++) {
		fill(0,128,0, 100);
		noStroke();
		ellipse(leaves[i].x, leaves[i].y, 4, 4);
		leaves[i].y += random(0, 2);
	}	
}
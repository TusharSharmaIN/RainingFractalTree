function Branch(begin, end){

	this.angle = PI/6;
	this.begin = begin;
	this.end = end;
	this.finished = false;
	
	this.show = function(){
		stroke(55);
		line(this.begin.x, this.begin.y, this.end.x, this.end.y);
	}
	
	this.branchA = function() {
		var dir = p5.Vector.sub(this.end, this.begin);
		dir.rotate(this.angle);
		dir.mult(2/3);
		var newEnd = p5.Vector.add(this.end, dir);
		var brnch = new Branch(this.end, newEnd);
		return brnch;
	}
	
	this.branchB = function() {
		
		var dir = p5.Vector.sub(this.end, this.begin);
		dir.rotate(-1*this.angle);
		dir.mult(2/3);
		var newEnd = p5.Vector.add(this.end, dir);
		var brnch = new Branch(this.end, newEnd);
		return brnch;
	}
}
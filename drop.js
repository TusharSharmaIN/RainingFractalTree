function Drop()	{
	
	this.x = random(width);
	this.y = random(-500, -100);
	this.z = random(0, 10);
	this.len = map(this.z, 0, 20, 5, 15);
	this.yspeed = map(this.z, 0, 20, 1, 20);
	
	this.c = new Color();
	
	this.fall = function()	{
		this.y = this.y + this.yspeed;
		var grav = map(this.z, 0, 20, 0, 0.2);
		this.yspeed += grav;
		if(this.y > height){
			this.y = random(-500, -100);
			this.yspeed = map(this.z, 0, 40, 1, 3);
		}
	}
  
	this.show = function()	{
		var thick = map(this.z, 0, 40, 1, 3);
		strokeWeight(thick);
		var indx = 0;
		stroke(this.c.R[indx], this.c.G[indx], this.c.B[indx]);
		line(this.x, this.y, this.x, this.y + this.len);
	}

}
class Point {
	x: number;
	y: number;

	draw() {
		console.log('x: ' + this.x + ', y: ' + this.y);
	}

}

let point = new Point();
point.x = 3;
point.y = 5;
point.draw();

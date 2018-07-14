class Point {

	constructor(private _x: number, private _y: number) {
		this._x = _x;
		this._y = _y;
	}
	
	draw() {
		console.log(this._x + '  ' + this._y);
	}
	
	get x() {
		return this._x;
	}

	get y() {
		return this._y;
	}

}

let point = new Point(2, 3);
point.draw();
console.log('\nX: ' + point.x + ' Y: ' + point.y);


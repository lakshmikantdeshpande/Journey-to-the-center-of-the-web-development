var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('x: ' + this.x + ', y: ' + this.y);
    };
    return Point;
}());
var point = new Point();
point.x = 3;
point.y = 5;
point.draw();

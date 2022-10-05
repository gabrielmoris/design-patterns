class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  toString() {
    return `${this.width}x${this.height}`;
  }
}

let rc = new Rectangle(2, 3);

console.log(rc.toString());

//If we want to extend the class of the Rectagle with a square
class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }
}

let sq = new Square(5);
console.log("right square", sq.toString());
//THIS shouldn't happen how should I arrange it?
sq.width = 10;
console.log("wrong square", sq.toString());

// Rewrite Rectangle as well as Square to use getters and setters would be a dangerous Idea

class RectangleWrong {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }

  set width(value) {
    this._width = value;
  }
  set height(value) {
    this._height = value;
  }

  get area() {
    return this._width * this._height;
  }

  toString() {
    return `${this._width}x${this._height}`;
  }
}

class SquareWrong extends RectangleWrong {
  constructor(size) {
    super(size, size);
  }

  set width(value) {
    this._width = this._height = value;
  }
  set height(value) {
    this._width = this._height = value;
  }
}

let sqWrong = new SquareWrong(5);
console.log("squareWrong width 5", sqWrong.toString());
sqWrong.width = 10;
console.log("squareWrong width 10", sqWrong.toString());

//PROBLEM
let rcWrong = new RectangleWrong(2, 3);
let sqWrong2 = new SquareWrong(5);
let useIt = function (rectangle) {
  let width = rectangle._width;
  rectangle.height = 10;
  //the area should be now 10 * width
  console.log(`
  Expected area of ${10 * width}
  I got ${rectangle.area}
  `);
};

useIt(rcWrong);
useIt(sqWrong2);

//This principle says that If I make a Function that takes a class like Rectangle it should
//be able to take a derived clase like Square without breaking the functionality

//HOW TO FIX THIS
class RectangleLiskov {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }
  get isSquare() {
    return this.width == this.height;
  }

  toString() {
    return `${this.width}x${this.height}`;
  }
}

//instead of making a square extending the rectangle,
//I just make a boolean function to know if this polygon is actually a square or not

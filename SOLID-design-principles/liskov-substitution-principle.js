// A superclass representing a bird
class Bird {
  fly() {
    return "I can fly!";
  }
}

// A subclass representing a duck, which can fly like a bird
class Duck extends Bird {
  quack() {
    return "Quack!";
  }
}

// A subclass representing a penguin, which cannot fly, so it overrides the fly method
class Penguin extends Bird {
  fly() {
    throw new Error("Cannot fly");
  }
  swim() {
    return "I can swim!";
  }
}

// A function that expects a Bird object and calls its fly method
function makeBirdFly(bird) {
  return bird.fly();
}

// Using the function with a Bird or Duck object works as expected
makeBirdFly(new Bird()); // "I can fly!"
makeBirdFly(new Duck()); // "I can fly!"

// Using the function with a Penguin object will throw an error, violating LSP
try {
  makeBirdFly(new Penguin());
} catch (e) {
  console.error(e.message); // "Cannot fly"
}

// In this example, the Penguin class violates the LSP because it changes the behavior
// of the fly method inherited from the Bird superclass. To adhere to LSP, the Penguin class
// should not override the fly method in a way that breaks the contract established by the Bird class.
// Instead, we could have a separate hierarchy for non-flying birds or handle the flying capability
// through composition rather than inheritance.

///////////////////// ANOTHER EXAMPLE /////////////////////
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
  //the area is now 10 * width
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

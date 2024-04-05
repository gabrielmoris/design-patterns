class Shape {}

class Circle extends Shape {
  constructor(radius = 0) {
    super();
    this.radius = radius;
  }

  resize(factor) {
    this.radius *= factor;
  }

  toString() {
    return `A Circle of radius ${this.radius}`;
  }
}

// What if at this point somebody wants me to implement a color?
// If I just modify Chape and Circle i would not wollow the open-closed principle

// This is the decorator class
class ColoredShape extends Shape {
  constructor(shape, color) {
    super();
    this.shape = shape;
    this.color = color;
  }

  toString() {
    return `${this.shape.toString()} with the color ${this.color}`;
  }
}

const circle = new Circle(2);
console.log(circle.toString());

const decoratedCircle = new ColoredShape(circle, "red");

console.log(decoratedCircle.toString());

// We can Wrap a decorator with another decorator

class TransparentShape extends Shape {
  constructor(shape, transparency) {
    super();
    this.shape = shape;
    this.transparency = transparency;
  }

  toString() {
    return `${this.shape.toString()} with ${this.transparency} transparency.`;
  }
}

const doubleDecoratedCircle = new TransparentShape(decoratedCircle, 0.5);
console.log(doubleDecoratedCircle.toString());

// Take care that If I want to modify the radius I would need to do it so

circle.resize(5);
console.log(doubleDecoratedCircle.toString());

// or

decoratedCircle.shape.resize(3);
console.log(doubleDecoratedCircle.toString());

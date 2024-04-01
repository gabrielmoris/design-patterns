class VectorRenderer {
  renderCircle(radius) {
    console.log(`I am rendering vectors of a circle with radius ${radius}`);
  }
}

class RasterRenderer {
  renderCircle(radius) {
    console.log(`I am drawing pixels of a circle with radius ${radius}`);
  }
}

class Shape {
  constructor(renderer) {
    this.renderer = renderer;
  }
}

class Circle extends Shape {
  constructor(renderer, radius) {
    super(renderer);
    this.radius = radius;
  }

  draw() {
    this.renderer.renderCircle(this.radius);
  }

  resize(factor) {
    this.radius *= factor;
  }
}

// In case I have different ways to render this shapes (by pixels, vectors...) It wouldt scale.
// I would need to render Vector Circle, Vector square, Raster Circle, raster Square... This is called state space explosion.

// We Create 2 hierarchies
// 1. Shape: Square, circle, triangle ...
// 2. Renderer: Raster, Vector...

// We can Use the bridge in the constructor, like in Shape, then in the circle i call super and I choose the render way when I create the shape
let raster = new RasterRenderer();
let vector = new VectorRenderer();

let circle = new Circle(vector, 5);
circle.draw();
circle.resize(5);
circle.draw();

let circlePx = new Circle(raster, 5);
circlePx.draw();
circlePx.resize(5);
circlePx.draw();

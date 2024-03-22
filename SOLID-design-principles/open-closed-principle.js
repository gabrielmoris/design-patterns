//In this example, Shape is a base class that is closed for modification (you don’t change it), but open for extension
// (devs can create new shapes like Rectangle and Circle that extend Shape)

// Base class for shapes that provides an interface to calculate area
class Shape {
  getArea() {
    throw new Error("Area method must be implemented");
  }
}

// Extended classes that implement the area method
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

// A class that uses Shape objects to calculate total area, without knowing the specific type of shape
class AreaCalculator {
  static calculateTotalArea(shapes) {
    return shapes.reduce((area, shape) => {
      if (shape instanceof Shape) {
        return area + shape.getArea();
      }
      throw new Error("Invalid shape");
    }, 0);
  }
}

// Usage
const shapes = [new Rectangle(5, 3), new Circle(2)];
const totalArea = AreaCalculator.calculateTotalArea(shapes);
console.log(totalArea); // Outputs the total area of all shapes

///////////////////// ANOTHER EXAMPLE /////////////////////
//Objects are open to extension but closed for modification. Javascript doesnt have enums, so we freeze the objects instead.
let Color = Object.freeze({
  red: "red",
  green: "green",
  blue: "blue",
});

let Size = Object.freeze({
  small: "small",
  medium: "medium",
  large: "large",
});

class Product {
  constructor(name, color, size) {
    this.name = name;
    this.color = color;
    this.size = size;
  }
}

//Without the open-closed-principle
class ProductFilter {
  filterByColor(products, color) {
    return products.filter((p) => p.color === color);
  }
  //This is modification, not extension. Extension would be class inheritance!
  filterBySize(products, size) {
    return products.filter((p) => p.size === size);
  }
  //This is modification, not extension. Extension would be class inheritance!
  filterBySizeAndColor(products, size, color) {
    return products.filter((p) => p.size === size && p.color === color);
  }
  //If i want to implement more filters, I will run into a STATE SPACE EXPLOSION
  //If i have 3 criterias can be even 7 different methods. by color and size, by color and place...
  //To avoid this we create a class called specification
}

let apple = new Product("Apple", Color.green, Size.small);
let tree = new Product("Tree", Color.green, Size.large);
let house = new Product("House", Color.blue, Size.large);

let products = [apple, tree, house];

let pf = new ProductFilter();
console.log("Green products (using normal approach): ");
for (let p of pf.filterByColor(products, Color.green)) {
  console.log(p);
}

//With the open-closed principle

class ColorSpecification {
  constructor(color) {
    this.color = color;
  }
  isSatisfied(item) {
    return item.color === this.color;
  }
}
//Now every filter is untied from another

class SizeSpecification {
  constructor(size) {
    this.size = size;
  }
  isSatisfied(item) {
    return item.size === this.size;
  }
}

//Abstract specification
// class Specification {
//   constructor() {
//     if (this.constructor.name === "Specification") {
//       throw new Error("Specification is abstract!");
//     }
//   }
//   isSatisfied(item) {}
// }

//And I can combine filters. This is called Combinator.

class AndSpecification {
  constructor(...specs) {
    this.specs = specs;
  }
  isSatisfied(item) {
    return this.specs.every((x) => x.isSatisfied(item));
  }
}

class BetterFilter {
  filter(items, specification) {
    return items.filter((x) => specification.isSatisfied(x));
  }
}

let bf = new BetterFilter();
console.log("Green products (using open-closed): ");
for (let p of bf.filter(products, new ColorSpecification(Color.green))) {
  console.log(p);
}
console.log("Large and Green products (using open-closed): ");
let spec = new AndSpecification(
  new ColorSpecification(Color.green),
  new SizeSpecification(Size.large)
);

for (let p of bf.filter(products, spec)) {
  console.log(p);
}

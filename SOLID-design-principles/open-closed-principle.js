//Objects are open to extension but closed for modification.
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

let apple = new Product("Apple", Color.green, Size.small);
let tree = new Product("Tree", Color.green, Size.large);
let house = new Product("House", Color.blue, Size.large);

let products = [apple, tree, house];

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
  //If my boss asks for more filters, I will run into a STATE SPACE EXPLOSION
  //If i have 3 criterias can be even / different methods
  //To avoid this we create a class called specification
}

let pf = new ProductFilter();
console.log("Green products (using old approach): ");
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

//And I can combine filters

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

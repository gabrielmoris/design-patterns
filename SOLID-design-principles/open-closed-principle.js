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

class ProductFilter {
  filterByColor(products, color) {
    return products.filter((p) => p.color === color);
  }
  //This is modification
  filterBySize(products, size) {
    return products.filter((p) => p.size === size);
  }
}

let apple = new Product("Apple", Color.green, Size.small);
let tree = new Product("Tree", Color.green, Size.large);
let house = new Product("House", Color.blue, Size.large);

let products = [apple, tree, house];
let pf = new ProductFilter();
console.log("Green products: ");
for (let p of pf.filterByColor(products, Color.green)) {
  console.log(p);
}

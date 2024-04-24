// Visitable classes
// The Client code creates the Visitables and the Visitor, and then uses the accept method to perform the price calculation.
class Book {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  accept(visitor) {
    return visitor.visitBook(this);
  }
}

class CD {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  accept(visitor) {
    return visitor.visitCD(this);
  }
}

class Electronics {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  accept(visitor) {
    return visitor.visitElectronics(this);
  }
}

// Visitor class: the PriceCalculatorVisitor is the Visitor that calculates the price of each item.
class PriceCalculatorVisitor {
  visitBook(book) {
    return book.price;
  }

  visitCD(cd) {
    return cd.price;
  }

  visitElectronics(electronics) {
    return electronics.price;
  }
}

// Client code
const book = new Book("The Visitor Pattern", 19.99);
const cd = new CD("Design Patterns", 14.99);
const electronics = new Electronics("Headphones", 49.99);

const priceCalculator = new PriceCalculatorVisitor();
const totalPrice =
  book.accept(priceCalculator) +
  cd.accept(priceCalculator) +
  electronics.accept(priceCalculator);

console.log(`Total price: $${totalPrice.toFixed(2)}`);

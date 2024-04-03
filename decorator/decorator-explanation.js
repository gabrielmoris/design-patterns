/////////////// Using Functions to Decorate Objects ///////////////

// consider a simple coffee-making function that can be decorated with additional features like adding flavors or engraving the cup
function coffee(size, flavors) {
  this._size = size || "medium";
  this._flavors = flavors || [];
  this._cost = 100;
  this.info = function () {
    console.log(this._size, this._flavors, this._cost);
  };
}

// In this example, the addFlavor and engraving functions act as decorators,
// enhancing the coffee object with additional features without modifying the original coffee function.

// Decorator to add flavor
function addFlavor(coffee, flavor) {
  coffee._flavors.push(flavor);
  coffee._cost += 25;
}

// Decorator to engrave the cup
function engraving(coffee) {
  coffee._cost += 200;
}

// Instantiate Coffee
var testCoffee = new coffee("Large", ["vanilla"]);

// Add Flavors
addFlavor(testCoffee, "chocolate");
addFlavor(testCoffee, "almond");
addFlavor(testCoffee, "hazelnut");

// Add Engraving
engraving(testCoffee);

// Log it all to the console
testCoffee.info();

/////////////// Using Prototypes to Decorate Objects ///////////////

// Decorator Pattern with prototype. Here, the addCream method is added to the coffee prototype,
// making it available to all coffee instances. This method acts as a decorator, providing additional functionality
// to the coffee object.

coffee.prototype.addCream = function () {
  this._cost += 100;
};

// Instantiate Coffee
var testCoffee = new coffee("Large", ["vanilla"]);

// Add Cream using the prototype method
testCoffee.addCream();

// Log it all to the console
testCoffee.info();

/////////////// Decorators in ES6 and Beyond ///////////////
// With the introduction of ES6 and further developments in JavaScript,
// decorators have become more formalized, especially with the proposal for
// decorators in JavaScript that allows metadata or behavior to be added to classes,
// methods, and properties using the @decorator syntax.

// NOTE:  decorators are not yet fully supported in JavaScript.

// Decorator function
// function log(target, key, descriptor) {
//   const originalMethod = descriptor.value;
//   descriptor.value = function (...args) {
//     console.log(`Logging ${key} function`);
//     return originalMethod.apply(this, args);
//   };
//   return descriptor;
// }

// Class with a method decorator
// class Example {
//   @log
//   greet() {
//     console.log("Hello, world!");
//   }
// }

// In this example, the @log decorator is applied to the greet method of the Example class.
// It modifies the behavior of the method to include logging before the original method is called

// const example = new Example();
// example.greet(); // Logs "Logging greet function" and "Hello, world!"

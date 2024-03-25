//  The primary motivation for using the Builder pattern is to simplify client code that creates complex objects.
//  By using the Builder, the client can direct the steps taken to construct the object without needing to know how
// the actual work is accomplished.

// Participants//
// 1. Director: In our example code, we’ll call it the Shop. The Director constructs products by using the Builder’s multistep interface.
// 2. Builder: Although not directly used in JavaScript (since JavaScript doesn’t support abstract classes), it declares a multistep interface
//  for creating a complex product.
// 3. ConcreteBuilder: In our example, we’ll have two concrete builders: CarBuilder and TruckBuilder. These builders implement the
//  multistep Builder interface and maintain the product through the assembly process.
// 4. Product: Represents the complex objects being assembled. In our case, we’ll have Car and Truck objects.

// Shop (Director)
function Shop() {
  this.construct = function (builder) {
    builder.step1();
    builder.step2();
    return builder.get();
  };
}

// CarBuilder (ConcreteBuilder)
function CarBuilder() {
  this.car = null;
  this.step1 = function () {
    this.car = new Car();
  };
  this.step2 = function () {
    this.car.addParts();
  };
  this.get = function () {
    return this.car;
  };
}

// TruckBuilder (ConcreteBuilder)
function TruckBuilder() {
  this.truck = null;
  this.step1 = function () {
    this.truck = new Truck();
  };
  this.step2 = function () {
    this.truck.addParts();
  };
  this.get = function () {
    return this.truck;
  };
}

// Car (Product)
function Car() {
  this.doors = 0;
  this.addParts = function () {
    this.doors = 4;
  };
  this.say = function () {
    return `I am a car with ${this.doors} doors.`;
  };
}

// Truck (Product)
function Truck() {
  this.wheels = 0;
  this.addParts = function () {
    this.wheels = 6;
  };
  this.say = function () {
    return `I am a truck with ${this.wheels} wheels.`;
  };
}

// Usage
const shop = new Shop();
const carBuilder = new CarBuilder();
const truckBuilder = new TruckBuilder();

const car = shop.construct(carBuilder);
const truck = shop.construct(truckBuilder);

console.log(car.say()); // Output: "I am a car with 4 doors."
console.log(truck.say()); // Output: "I am a truck with 6 wheels."

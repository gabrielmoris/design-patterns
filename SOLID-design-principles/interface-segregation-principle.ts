//THIS PRINCIPLE IS NOT RELEVANT IN JAVASCRIPT AS IN ANOTHER LANGUAGES

// Let’s illustrate this with a JavaScript example using TypeScript (since JavaScript doesn’t have a built-in interface feature).
// Consider an interface Vehicle:
interface Vehicle {
  make: string;
  numberOfWheels: number;
  maxSpeed?: number;
  getReachKm(fuel: number, kmPerLitre: number): number;
}

// And a class Car that implements this interface:
class Car implements Vehicle {
  make: string;
  numberOfWheels: number;
  maxSpeed: number;

  constructor(make, numberOfWheels, maxSpeed) {
    this.make = make;
    this.numberOfWheels = numberOfWheels;
    this.maxSpeed = maxSpeed;
  }

  getReachKm(fuel: number, kmPerLitre: number) {
    return fuel * kmPerLitre;
  }
}

const carObj = new Car("BMW", 4, 240);

// In this example, the Car class is not forced to implement any methods that it doesn’t use. This is in line with the Interface Segregation Principle
// The goal of ISP is to reduce the side effects and frequency of required changes by splitting the software into multiple, independent parts

///////////////////// ANOTHER EXAMPLE /////////////////////

class Document2 {}

//this class can not be constructed
class Machine {
  constructor() {
    if (this.constructor.name === "Machine") {
      throw new Error("Machine is abstract!");
    }
  }
  print(doc) {
    console.log("printing..." + doc);
  }
  fax(doc) {
    console.log("sending fax..." + doc);
  }
  scan(doc) {
    console.log("printing..." + doc);
  }
}

// I want to create a multifunction printer

class MultiFunctionPtinter extends Machine {
  print(doc) {
    //OVERWRITTEN
    console.log(`print faster and better the ${doc}`);
  }
  fax(doc) {
    //OVERWRITTEN
    console.log(`send the fax faster and better the ${doc}`);
  }
  scan(doc) {
    //OVERWRITTEN
    console.log(`scan faster and better the ${doc}`);
  }
}

class OldFashionedPrinter extends Machine {
  print(doc) {
    //is old, shouldn't do it, overwrite to do nothing
  }
  fax(doc) {
    //is old, shouldn't do it, overwrite to do nothing
  }
  scan(doc) {
    //is old, shouldn't do it, overwrite to do nothing
    //This violates the principle of least surprise.: When an user uses your API, they should not be surprised
    //by seeing "magic" behaviour or a lack of behaviour. All results must be predictable
  }
}
//I can also throw errors
class OldFashionedPrinter2 extends Machine {
  print(doc) {
    throw new Error("not implemented");
  }
  fax(doc) {
    throw new Error("not implemented");
  }
  scan(doc) {
    throw new Error("not implemented");
  }
}

let printer = new OldFashionedPrinter2();

// printer.scan(); //Or I can create a new class Error

class NotImplementedError extends Error {
  constructor(name) {
    let msg = `${name} is not implemented`;
    super(msg);
    // if (Error.captureStackTrace) {
    //   Error.captureStackTrace(this, NotImplementedError);
    // }
  }
}

class OldFashionedPrinter3 extends Machine {
  print(doc) {
    throw new NotImplementedError("OldFashionedPrinter3.print");
  }
  fax(doc) {
    throw new NotImplementedError("OldFashionedPrinter3.fax");
  }
  scan(doc) {
    throw new NotImplementedError("OldFashionedPrinter3.scan");
  }
}

let printer2 = new OldFashionedPrinter3();
// printer2.scan();

//So far this is not very user friendly because we force the users to leave the methods blank or throw errors out of those methods

//ISP =  segregate or split up interfaces into different parts so that users don't implement more than they need
//Using this principle:

class PrinterISP {
  constructor() {
    if (this.constructor.name === "Printer") {
      throw new Error("Printer is abstract!");
    }
  }
  print() {
    console.log("printing...");
  }
}

class ScannerISP {
  constructor() {
    if (this.constructor.name === "Scanner") {
      throw new Error("Scanner is abstract!");
    }
  }
  scan() {
    console.log("scanning...");
  }
}

class FaxISP {
  constructor() {
    if (this.constructor.name === "Fax") {
      throw new Error("Fax is abstract!");
    }
  }
  fax() {
    console.log("sending Fax...");
  }
}

//because in JavaScript we cant make multiple inheritance, we do this:
//there is a way to do an aggregation function. It is complicated but possible.
class Photocopier {
  print() {}
  scan() {}
}

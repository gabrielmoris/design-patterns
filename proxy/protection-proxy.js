// proxy that protects a resource

class Car {
  drive() {
    console.log("Car is being driven");
  }
}

class CarProxy {
  constructor(driver) {
    this.driver = driver;
    this._car = new Car();
  }

  drive() {
    if (this.driver.age > 18) {
      this._car.drive();
    } else {
      console.log("Too young, go grow!");
    }
  }
}

class Driver {
  constructor(age) {
    this.age = age;
  }
}

let car = new CarProxy(new Driver(12));
let car2 = new CarProxy(new Driver(21));

// I made a protection proxy to allow access to a particular resource (CarProxy)
car.drive();
car2.drive();

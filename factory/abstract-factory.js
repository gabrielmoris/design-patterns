// Abstract factory function
function createFactory(type) {
  if (type === "car") {
    return {
      create: function (model) {
        return new Car(model);
      },
    };
  } else if (type === "truck") {
    return {
      create: function (model) {
        return new Truck(model);
      },
    };
  }
}

// Concrete factories
function Car(model) {
  this.model = model;
}

function Truck(model) {
  this.model = model;
}

// Client code
const carFactory = createFactory("car");
const car = carFactory.create("Honda");
console.log(car.model); // Output: Honda

const truckFactory = createFactory("truck");
const truck = truckFactory.create("Ford");
console.log(truck.model); // Output: Ford

///////////////////// ANOTHER EXAMPLE /////////////////////

// Abstract factory is not very useful in JavaScript

const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class HotDrink {
  //In javascript we dont have abstract members
  consume() {}
}

class Tea extends HotDrink {
  consume() {
    console.log("This tea is nice with lemon!");
  }
}

class Coffee extends HotDrink {
  consume() {
    console.log(`This coffee is delicious!`);
  }
}

class HotDrinkFactory {
  prepare(amount) {
    /* abstract */
  }
}

class TeaFactory extends HotDrinkFactory {
  prepare(amount) {
    console.log(`Grind some beans, boil water, pour ${amount}ml`);
    return new Tea();
  }
}

class CoffeeFactory extends HotDrinkFactory {
  prepare(amount) {
    console.log(`Put in tea bag, boil water, pour ${amount}ml`);
    return new Coffee();
  }
}

let AvailableDrink = Object.freeze({
  //this selected element is a type
  coffee: CoffeeFactory,
  tea: TeaFactory,
});

class HotDrinkMachine {
  constructor() {
    this.factories = {};
    for (let drink in AvailableDrink) {
      this.factories[drink] = new AvailableDrink[drink]();
    }
  }

  makeDrink(type) {
    switch (type) {
      case "tea":
        return new TeaFactory().prepare(200);
      case "coffee":
        return new CoffeeFactory().prepare(50);
      default:
        throw new Error(`Don't know how to make ${type}`);
    }
  }

  interact(consumer) {
    rl.question(
      "Please specify drink and amount " + "(e.g., tea 50): ",
      (answer) => {
        let parts = answer.split(" ");
        let name = parts[0];
        let amount = parseInt(parts[1]);
        let d = this.factories[name].prepare(amount);
        rl.close();
        consumer(d);
      }
    );
  }
}

let machine = new HotDrinkMachine();
//instead of making this here we give the interact method to the machine
// rl.question("which drink? ", function (answer) {
//   let drink = machine.makeDrink(answer);
//   drink.consume();

//   rl.close();
// });
machine.interact(function (drink) {
  drink.consume();
});

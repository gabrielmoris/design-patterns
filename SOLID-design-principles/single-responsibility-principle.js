// This principle says that It is better that this object has only one responsability, and then we would do
// the rest of tasks in other objects
const fs = require("fs");

// It keeps the entries and manages them. This would be the base class.
class Journal {
  constructor() {
    this.entries = {};
  }

  addEntry(text) {
    let c = ++Journal.count;
    let entry = `${c}: ${text}`;
    this.entries[c] = entry;
    return c;
  }

  removeEntry(index) {
    delete this.entries[index];
  }

  toString() {
    return Object.values(this.entries).join("\n");
  }

  // What should I do If I want to save the entries in FS?
  //This should be in a new Class. Not here, because his class only should have 1 single responsability
  //   save(filename) {
  //     fs.writeFileSync(filename, this.toString());
  //   }

  //   load(filename) {
  //     //
  //   }

  //   loadFromUrl(url) {
  //     //
  //   }
}

Journal.count = 0;

// For this reason I would have a persistant manager class.
class PersistenceManager {
  preprocess(j) {
    // any function to process
    console.log(j);
  }

  saveToFile(journal, filename) {
    fs.writeFileSync(filename, journal.toString());
  }
}

let j = new Journal();
j.addEntry("I ate very spicy nuddles.");
j.addEntry("I like learning to code.");
console.log(j.toString());

let p = new PersistenceManager();
let filename = "output.txt";
p.saveToFile(j, filename);

///////////////////// ANOTHER EXAMPLE /////////////////////

// A class that represents a car with its properties
class Car {
  constructor(name, model, year) {
    this.name = name;
    this.model = model;
    this.year = year;
  }
}

// A separate service class for handling API calls related to cars
class CarService {
  static getCar(id) {
    // logic to fetch a car from an API
  }

  static saveCar(car) {
    // logic to save a car to an API
  }
}

// Usage
const myCar = new Car("Tesla", "Model S", 2020);
CarService.saveCar(myCar);

const fs = require("fs");
const path = require("path");

// This is a class with the singleton implementation
class MyDatabase {
  constructor() {
    const instance = this.constructor.instance;
    if (instance) {
      return instance;
    }
    this.constructor.instance = this;
    console.group("Initializing Database");
    this.capitals = {};

    let lines = fs
      .readFileSync(path.join(__dirname, "capitals.txt"))
      .toString()
      .split("\n");

    for (let i = 0; i < lines.length / 2; i++) {
      this.capitals[lines[2 * i]] = parseInt(lines[2 * i + 1]);
    }
  }

  getPopulation(city) {
    return this.capitals[city];
  }
}

// ↑↑↑ Low Level Module ↑↑↑

// ↓↓↓ High Level Module ↓↓↓

class SingletonRecordFinder {
  totalPopulation(cities) {
    return cities
      .map((city) => new MyDatabase().getPopulation(city))
      .reduce((x, y) => x + y);
  }
}

// to follow the Dependency inversion principle. High level Module shouldnt deppend on the Low level module.
// I get the database in the constructor
class ConfigurableRecordFinder {
  constructor(database = new MyDatabase()) {
    this.database = database;
  }

  totalPopulation(cities) {
    return cities
      .map((city) => this.database.getPopulation(city))
      .reduce((x, y) => x + y);
  }
}

module.exports = {
  MyDatabase,
  SingletonRecordFinder,
  ConfigurableRecordFinder,
};

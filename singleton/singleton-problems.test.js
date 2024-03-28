const {
  MyDatabase,
  SingletonRecordFinder,
  ConfigurableRecordFinder,
} = require("./singleton-problems");

class DummyDatabase {
  constructor() {
    this.capitals = {
      Baku: 10,
      Dhaka: 5,
      Thimphu: 5,
    };
  }

  getPopulation(city) {
    return this.capitals[city];
  }
}

describe("Singleton Database", () => {
  it("Is a Singleton", () => {
    const db1 = new MyDatabase();
    const db2 = new MyDatabase();
    expect(db1).toBe(db2);
  });

  it("Calculates total population", () => {
    let rf = new SingletonRecordFinder();
    let cities = ["Baku", "Dhaka", "Thimphu"];
    let totalPopulation = rf.totalPopulation(cities);
    expect(totalPopulation).toEqual(11394551); // This is problematic, because I am just testing the population,
    //but if in the DB the population changes, I cant rely in this test.
    // Im also not able to make a mocked data because it is a singleton.
    // The Dependency inversion principle says that a High level Module shouldn't depend on the low level module.
  });

  it("Calculates total population correctly with mocked data", () => {
    let db = new DummyDatabase();
    // This class accepts as an argument the database
    let rf = new ConfigurableRecordFinder(db);
    let cities = ["Baku", "Dhaka", "Thimphu"];
    let totalPopulation = rf.totalPopulation(cities);
    expect(totalPopulation).toEqual(20); // Expected from the mocked database
  });
});

// Takeaway: The singleton can be Problematic if you take a direct dependency on it
// If you introduce it as a Dependency as it is the case of ConfigurableRecordFinder the problem is solved.

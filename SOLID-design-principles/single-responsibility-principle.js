// This principle says that It is better that this object has only one responsability, and then we would do
// the rest of tasks in other objects
const fs = require("fs");

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

  //This should be in a new Class
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

class PersistenceManager {
  preprocess(j) {
    //
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
let filename =
  "/home/gabriel/udemy/design-patterns/SOLID-design-principles/journal.txt";
p.saveToFile(j, filename);

// separation of concerns

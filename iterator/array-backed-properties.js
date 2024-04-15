class Creature {
  constructor() {
    this.strength = this.agility = this.intelligence = 10;
  }

  get sumOfStats() {
    return this.strength + this.agility + this.intelligence;
  }

  get averageStat() {
    return this.sumOfStats / 3.0;
  }

  get maxStat() {
    return Math.max(this.strength, this.agility, this.intelligence);
  }
}

let creature = new Creature();

creature.strength = 10;
creature.agility = 11;
creature.intelligence = 15;

console.log("Creature average stats ", creature.averageStat);
console.log("Creature max stat ", creature.maxStat);
console.log("Creature sum stats ", creature.sumOfStats);

// At this point, if we want to add a new stat, it would be painful. Here the iterator becomes handy

// From my point of view I would save instead an array of statname, statvalue and set it instead of adding a getter and setter hardcoded

class Iterator {
  constructor() {
    this.stats = new Array(3).fill(10);
  }

  get strength() {
    return this.stats[0];
  }

  set strength(val) {
    this.stats[0] = val;
  }

  get sumOfStats() {
    return this.stats.reduce((x, y) => x + y, 0);
  }

  get averageStat() {
    return this.sumOfStats / this.stats.length;
  }

  get maxStat() {
    return Math.max(...this.stats);
  }
}

let creatureIterator = new Iterator();

creatureIterator.strength = 10;
creatureIterator.agility = 11;
creatureIterator.intelligence = 15;

console.log("creatureIterator average stats ", creatureIterator.averageStat);
console.log("creatureIterator max stat ", creatureIterator.maxStat);
console.log("creatureIterator sum stats ", creatureIterator.sumOfStats);

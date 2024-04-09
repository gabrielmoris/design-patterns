// Proxy that takes care of a property

class Property {
  constructor(value, name = "") {
    this._value = value;
    this.name = name;
  }

  get value() {
    return this._value;
  }

  set value(newValue) {
    if (this._value === newValue) return;

    console.log(`Assigning ${newValue} to ${this.name}`);
    this._value = newValue;
  }
}

class Creature {
  constructor() {
    this._agility = new Property(10, "agility");
  }

  get agility() {
    return this._agility.value;
  }

  set agility(newValue) {
    this._agility.value = newValue;
  }
}

let c = new Creature();

// The Property will take care of changing the value of the creature with the getters and setters
c.agility = 12;
c.agility = 16;

class ChiefExecutiveOfficer {
  // Guarantee that there will always be only one instance of this class
  // We can mock this behaviour by putting the _name and _age outside
  get name() {
    return ChiefExecutiveOfficer._name;
  }
  set name(value) {
    ChiefExecutiveOfficer._name = value;
  }
  get age() {
    return ChiefExecutiveOfficer._age;
  }
  set age(value) {
    ChiefExecutiveOfficer._age = value;
  }

  toString() {
    return `CEO's name is ${this.name} and he is ${this.age} years old.`;
  }
}
// this makes the data to be shared with all the instaces
ChiefExecutiveOfficer._age = undefined;
ChiefExecutiveOfficer._name = undefined;

let ceo = new ChiefExecutiveOfficer();
ceo.name = "Marco";
ceo.age = 32;

console.log(ceo.toString());
let ceo2 = new ChiefExecutiveOfficer();
ceo2.name = "Polo";
ceo2.age = 64;
console.log(ceo.toString());
console.log(ceo2.toString());

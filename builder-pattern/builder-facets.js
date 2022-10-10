class Person {
  constructor() {
    // address info
    this.streetAddress = this.postcode = this.city = "";

    // employment info
    this.companyName = this.position = "";
    this.annualIncome = 0;
  }

  toString() {
    return (
      `Person lives at ${this.streetAddress}, ${this.city}, ${this.postcode}\n` +
      `and works at ${this.companyName} as a ${this.position} earning ${this.annualIncome}€ bruto/year`
    );
  }
}
//Base class, where I store the object where I will work
class PersonBuilder {
  //Here I initialize the new Person. The rest of builders will have access to the person (not a copy) by putting it as an argument
  constructor(person = new Person()) {
    this.person = person;
  }

  get lives() {
    // Passing the person object in the constructor makes the other builders be able to build in the same object and not a copy
    return new PersonAddressBuilder(this.person);
  }

  get works() {
    return new PersonJobBuilder(this.person);
  }

  build() {
    return this.person;
  }
}

class PersonJobBuilder extends PersonBuilder {
  constructor(person) {
    // Here I store the reference
    super(person);
  }

  at(companyName) {
    this.person.companyName = companyName;
    return this;
  }

  asA(position) {
    this.person.position = position;
    return this;
  }

  earning(annualIncome) {
    this.person.annualIncome = annualIncome;
    return this;
  }
}

class PersonAddressBuilder extends PersonBuilder {
  constructor(person) {
    super(person);
  }

  at(streetAddress) {
    this.person.streetAddress = streetAddress;
    return this;
  }

  withPostcode(postcode) {
    this.person.postcode = postcode;
    return this;
  }

  in(city) {
    this.person.city = city;
    return this;
  }
}

let pb = new PersonBuilder();
let person = pb.lives
  .at("123 Frankfurt Road")
  .in("Frankfurt")
  .withPostcode("60485")
  .works.at("Ameropa")
  .asA("Frontend Engineer")
  .earning(123000)
  .build();
console.log(person.toString());

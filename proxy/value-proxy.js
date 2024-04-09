// Simple proxy that takes care of a value

class Percentage {
  constructor(percent) {
    this.percent = percent;
  }

  toString() {
    return `${this.percent}%`;
  }

  valueOf() {
    return this.percent / 100;
  }
}

// Here we can use fivePercent (once is constructed)
// as a number and still the toString method will return the actual percentage
let fivePercent = new Percentage(5);
console.log(`${fivePercent.toString()} of 50 is ${50 * fivePercent}`);

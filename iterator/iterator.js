let values = ["uno", "dos", "tres", "cuatro"];

for (let index in values) {
  console.log("Element in position " + index + " is " + values[index]);
}

for (let v of values) {
  console.log("I Iterate showing directly the element " + v);
}

// How javascript know this element is iterable?

class Stuff {
  constructor() {
    this.a = "ONE";
    this.b = "TWO";
  }
}

let stuff = new Stuff();

// for (let item of stuff) {
//   console.log("THIS THROWS AN ERROR");
// }

class Iterable {
  constructor() {
    this.a = "ONE";
    this.b = "TWO";
  }

  [Symbol.iterator]() {
    let i = 0;
    // let self = this; // If I use an arrow function I dont need to bind this

    return {
      next: () => {
        return {
          done: i > 1,
          value: this[i++ === 0 ? "a" : "b"], // It does the comparation and then increments the value of i. Wr couldnt do it after a return, logically.
        };
      },
    };
  }
  get backwards() {
    let i = 0;
    return {
      next: () => {
        return {
          done: i > 1,
          value: this[i++ === 0 ? "b" : "a"], // It does the comparation and then increments the value of i. Wr couldnt do it after a return, logically.
        };
      },
      [Symbol.iterator]: function () {
        // Here I cant use an arrow function becaus this must point to the function iterator
        return this;
      },
    };
  }
}

const iterable = new Iterable();

for (let item of iterable) {
  console.log("Now it is iterable => ", item);
}
for (let item of iterable.backwards) {
  console.log("Now backwards is iterable => ", item);
}

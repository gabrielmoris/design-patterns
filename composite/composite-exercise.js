class SingleValue {
  constructor(value) {
    this.val = value;
  }

  // I need to make it iterable
  [Symbol.iterator]() {
    let returned = false;
    return {
      next: () => ({ value: this.val, done: returned++ }),
    };
  }
}

class ManyValues extends Array {}

let sum = function (containers) {
  let result = 0;

  for (let container of containers) {
    for (let item of container) {
      result += item;
    }
  }
  return result;
};

module.exports = { SingleValue, ManyValues, sum };

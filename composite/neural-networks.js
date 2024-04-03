const { aggregation } = require("./aggregation-library"); //stackoverflow.com/questions/29879267/  ES6 Class Multiple inheritance To allow NeuronLayer to extend Array and Connectable

// This is the implementation of the composite pattern
class Connectable {
  connectTo(other) {
    for (let from of this) {
      for (let to of other) {
        from.out.push(to);
        to.in.push(from);
      }
    }
  }
}

class Neuron extends Connectable {
  constructor() {
    super();
    this.in = [];
    this.out = [];
  }

  // If I want to connect neurons with neurons and layers with layers I cant make this method everywherre
  // That is where the composite pattern becomes handy. The connectable is added before this class.
  //   connectTo(other) {
  //     this.out.push(other);
  //     other.in.push(this);
  //   }

  toString() {
    return `A neuron with ${this.in.length} inputs and ${this.out.length} outputs`;
  }

  // I need to make it iterable
  [Symbol.iterator]() {
    let returned = false;
    return {
      next: () => ({ value: this, done: returned++ }),
    };
  }
}

class NeuronLayer extends aggregation(Array, Connectable) {
  constructor(count) {
    super();
    while (count-- > 0) {
      this.push(new Neuron());
    }
  }

  toString() {
    return `A Layer with ${this.length} neurons`;
  }
}

let neur1 = new Neuron();
let neur2 = new Neuron();
let layer1 = new NeuronLayer(3);
let layer2 = new NeuronLayer(4);

neur1.connectTo(neur2);
neur1.connectTo(layer2);
layer2.connectTo(neur1);
layer1.connectTo(layer2);

console.log(neur1.toString());
console.log(neur2.toString());
console.log(layer1.toString());
console.log(layer2.toString());

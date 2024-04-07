// Flyweight class that contains shared state and an operation method
// that uses both the shared state and a unique state passed in as a parameter

class Flyweight {
  constructor(sharedState) {
    this.sharedState = sharedState;
  }

  operation(uniqueState) {
    console.log(
      `Flyweight: sharedState (${this.sharedState}) and uniqueState (${uniqueState})`
    );
  }
}

// FlyweightFactory class manages the creation and sharing of Flyweight objects.
// The factory checks if a Flyweight object with a particular shared state already exists
// and returns it if it does.
// If it doesn't, it creates a new Flyweight object with that shared state and returns it
class FlyweightFactory {
  constructor() {
    this.flyweights = {};
  }

  getFlyweight(sharedState) {
    if (!this.flyweights[sharedState]) {
      this.flyweights[sharedState] = new Flyweight(sharedState);
      return this.flyweights[sharedState];
    }

    return this.flyweights[sharedState];
  }

  getFlyweightCount() {
    return Object.keys(this.flyweights).length;
  }
}

const factory = new FlyweightFactory();
const flyweight1 = factory.getFlyweight("sharedState1");
flyweight1.operation("uniqueState1");
const flyweight2 = factory.getFlyweight("sharedState2");
flyweight2.operation("uniqueState2");
const flyweight3 = factory.getFlyweight("sharedState1");
flyweight3.operation("uniqueState3");
console.log(`Total flyweight objects created: ${factory.getFlyweightCount()}`);

// By using the Flyweight pattern, we can reduce the memory footprint of our application
//  by sharing objects that have the same intrinsic properties.
//  This can lead to significant memory savings, especially with large datasets

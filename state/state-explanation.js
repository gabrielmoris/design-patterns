// State interface
class State {
  handleClick(context) {
    throw new Error("State.handleClick(context) must be implemented.");
  }
}

// Concrete State classes
class StartState extends State {
  handleClick(context) {
    console.log("ON button clicked.");
    context.state = new ReadyState();
  }
}

class ReadyState extends State {
  handleClick(context) {
    console.log("OFF button clicked.");
    context.state = new StartState();
  }
}

// Context class:  it delegates the handling of the click event to the current state object by calling
// its handleClick method and passing the Button instance as a parameter

class Button {
  constructor() {
    this.state = new StartState();
  }

  click() {
    this.state.handleClick(this);
  }
}

// Usage
const button = new Button();
button.click(); // Output: ON button clicked.
button.click(); // Output: OFF button clicked.
button.click(); // Output: ON button clicked.

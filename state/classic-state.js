class Switch {
  constructor() {
    this.state = new OffState(); // It starts off
  }

  on() {
    this.state.on(this);
  }

  off() {
    this.state.off(this);
  }
}

class State {
  constructor() {
    if (this.constructor === State) {
      throw new Error("Abstract");
    }
  }

  on() {
    console.log("Light is already on");
  }

  off() {
    console.log("Light is already off");
  }
}

class OnState extends State {
  constructor() {
    super();
    console.log("Light is turned on.");
  }

  off(sw) {
    console.log("Turning light off...");
    sw.state = new OffState();
  }
}

class OffState extends State {
  constructor() {
    super();
    console.log("Light is turned off.");
  }

  on(sw) {
    console.log("Turning light on...");
    sw.state = new OnState();
  }
}

let sw = new Switch();
sw.on();
sw.off();
sw.on();
sw.on();

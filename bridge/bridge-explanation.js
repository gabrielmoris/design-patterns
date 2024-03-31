// This example demonstrates how different input devices (like gestures or a mouse)
// can interact with different output devices (like a screen or audio) through a
// common set of commands (click, move, drag, zoom), despite their different implementations.

// Implementor for output devices
class OutputDevice {
  click() {}
  move() {}
  drag() {}
  zoom() {}
}

// Concrete Implementors for output devices
class Screen extends OutputDevice {
  click() {
    console.log("Screen select");
  }
  move() {
    console.log("Screen move");
  }
  drag() {
    console.log("Screen drag");
  }
  zoom() {
    console.log("Screen zoom in");
  }
}

class Audio extends OutputDevice {
  click() {
    console.log("Sound oink");
  }
  move() {
    console.log("Sound waves");
  }
  drag() {
    console.log("Sound screech");
  }
  zoom() {
    console.log("Sound volume up");
  }
}

// Abstraction for input devices
class InputDevice {
  constructor(output) {
    this.output = output;
  }
}

// Refined Abstraction for specific input devices
class Gestures extends InputDevice {
  tap() {
    this.output.click();
  }
  swipe() {
    this.output.move();
  }
  pinch() {
    this.output.zoom();
  }
}

class Mouse extends InputDevice {
  click() {
    this.output.click();
  }
  move() {
    this.output.move();
  }
  wheel() {
    this.output.zoom();
  }
}

// Client code
const screen = new Screen();
const audio = new Audio();

const hand = new Gestures(screen);
const mouse = new Mouse(audio);

hand.tap(); // Output: Screen select
hand.swipe(); // Output: Screen move
mouse.click(); // Output: Sound oink
mouse.wheel(); // Output: Sound volume up

// The bridge is the composition relationship between InputDevice and OutputDevice,
//  allowing any input device to control any output device

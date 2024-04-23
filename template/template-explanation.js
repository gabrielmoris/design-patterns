// Abstract base class that defines the algorithm.
// It has three abstract methods (initialize(), startPlay(), and endPlay()) that are left unimplemented
class Game {
  play() {
    this.initialize();
    this.startPlay();
    this.endPlay();
  }

  // These methods are left unimplemented, to be defined by subclasses
  initialize() {}
  startPlay() {}
  endPlay() {}
}

// Concrete subclass that implements the specific steps.
// provide their own implementations for these methods,
// allowing them to customize the game-specific behavior while still
// following the overall algorithm defined in the base class.
class Chess extends Game {
  initialize() {
    console.log("Initializing Chess game");
  }

  startPlay() {
    console.log("Starting Chess game");
  }

  endPlay() {
    console.log("Ending Chess game");
  }
}

// Concrete subclass that implements the specific steps.
class Soccer extends Game {
  initialize() {
    console.log("Initializing Soccer game");
  }

  startPlay() {
    console.log("Starting Soccer game");
  }

  endPlay() {
    console.log("Ending Soccer game");
  }
}

// Usage
const chess = new Chess();
chess.play(); // Output: Initializing Chess game, Starting Chess game, Ending Chess game

const soccer = new Soccer();
soccer.play(); // Output: Initializing Soccer game, Starting Soccer game, Ending Soccer game

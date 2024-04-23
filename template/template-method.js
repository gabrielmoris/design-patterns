class Game {
  constructor(numOfPlayers) {
    this.numOfPlayers = numOfPlayers;
    this.currentPlayer = 0;
  }

  // Structure that all games will follow
  run() {
    this.start();
    while (!this.winner) {
      this.nextTurn();
    }
    console.log(`Player ${this.winningPlayer} wins`);
  }

  // Abstact methods
  start() {}
  get winner() {}
  nextTurn() {}
  get winningPlayer() {}
}

// This class will overwrithe the methods in the template
class Chess extends Game {
  constructor() {
    super(2);
    this.maxTurns = 10;
    this.turn = 1;
  }

  start() {
    console.log(`We start playing chess with ${this.numOfPlayers} players`);
  }
  get winner() {
    return this.turn === this.maxTurns;
  }
  nextTurn() {
    console.log(`Turn ${this.turn++}. Plays player ${this.currentPlayer}`);
    this.currentPlayer = (this.currentPlayer + 1) % this.numOfPlayers;
  }
  get winningPlayer() {
    return this.currentPlayer;
  }
}

let chess = new Chess();
chess.run();

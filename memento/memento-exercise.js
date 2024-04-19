class Token {
  constructor(value = 0) {
    this.value = value;
  }
}

class Memento {
  constructor() {
    this.tokens = [];
  }
}

class TokenMachine {
  constructor() {
    // todo
  }

  addTokenValue(value) {
    return this.addToken(new Token(value));
  }

  addToken(token) {
    // todo
  }

  revert(m) {
    // todo
  }
}

module.exports = { TokenMachine, Token };

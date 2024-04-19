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
    this.tokens = [];
  }

  addTokenValue(value) {
    return this.addToken(new Token(value));
  }

  addToken(token) {
    this.tokens.push(token);
    let m = new Memento();
    m.tokens = this.tokens.map((t) => new Token(t.value));
    return m;
  }

  revert(m) {
    // copy all the values of the tokens tokens from m
    this.tokens = m.tokens.map((t) => new Token(t.value));
  }
}

module.exports = { TokenMachine, Token };

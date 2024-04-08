class WordToken {
  constructor(capitalize = false) {
    this.capitalize = capitalize;
  }
}

class Sentence {
  constructor(plainText) {
    this.words = plainText.split(" ");
    this.capitalizedChars = {};
  }

  at(index) {
    let capitalized = new WordToken();
    this.capitalizedChars[index] = capitalized;
    return this.capitalizedChars[index];
  }

  toString() {
    let buffer = [];
    for (let i = 0; i < this.words.length; ++i) {
      let char = this.words[i];
      if (this.capitalizedChars[i] && this.capitalizedChars[i].capitalize) {
        char = char.toUpperCase();
      }
      buffer.push(char);
    }
    return buffer.join(" ");
  }
}

module.exports = { Sentence };

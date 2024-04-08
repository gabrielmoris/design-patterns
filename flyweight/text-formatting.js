// If I want to implement It by brutal force:
class FormattedText {
  constructor(plainText) {
    this.plainText = plainText;

    this.caps = new Array(plainText.length).map(() => false);
  }

  capitalize(start, end) {
    for (let i = start; i <= end; i++) {
      this.caps[i] = true;
    }
  }

  toString() {
    let buffer = [];
    for (let i in this.plainText) {
      let char = this.plainText[i];
      buffer.push(this.caps[i] ? char.toUpperCase() : char);
    }
    return buffer.join("");
  }
}

const text = "This is a not lightweight formatted text";

let formatted = new FormattedText(text);
formatted.capitalize(10, 25);
console.log(formatted.toString());

// ↑↑↑↑↑↑↑↑↑ This would be memory consumming
// typical Lightweight class that stores info.
class TextRange {
  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.capitalize = false;
  }

  covers(position) {
    return position >= this.start && position <= this.end;
  }
}

class LightWeightFormattedText {
  constructor(plainText) {
    this.plainText = plainText;
    this.formatting = [];
  }

  getRange(start, end) {
    let range = new TextRange(start, end);
    this.formatting.push(range);
    return range;
  }

  toString() {
    let buffer = [];
    for (let i in this.plainText) {
      let char = this.plainText[i];
      for (let range of this.formatting) {
        if (range.covers(i) && range.capitalize) {
          char = char.toUpperCase();
        }
        buffer.push(char);
      }
    }
    return buffer.join("");
  }
}

const text2 = "This is a lightweight formatted text";

let ft = new LightWeightFormattedText(text2);
ft.getRange(10, 22).capitalize = true;
console.log(ft.toString());

// Instead of storing a big array of data: this.caps = new Array(plainText.length).map(() => false);
// We story one array but with one element per instance

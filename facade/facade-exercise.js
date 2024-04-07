class Generator {
  generate(count) {
    let result = [];
    for (let i = 0; i < count; ++i)
      result.push(Math.floor(Math.random() * 6 + 1));
    return result;
  }
}

class Splitter {
  split(array) {
    let result = [];

    let rowCount = array.length;
    let colCount = array[0].length;

    // get the rows
    for (let r = 0; r < rowCount; ++r) {
      let theRow = [];
      for (let c = 0; c < colCount; ++c) theRow.push(array[r][c]);
      result.push(theRow);
    }

    // get the columns
    for (let c = 0; c < colCount; ++c) {
      let theCol = [];
      for (let r = 0; r < rowCount; ++r) theCol.push(array[r][c]);
      result.push(theCol);
    }

    // now the diagonals
    let diag1 = [];
    let diag2 = [];
    for (let c = 0; c < colCount; ++c) {
      for (let r = 0; r < rowCount; ++r) {
        if (c === r) diag1.push(array[r][c]);
        let r2 = rowCount - r - 1;
        if (c === r2) diag2.push(array[r][c]);
      }
    }

    result.push(diag1);
    result.push(diag2);

    return result;
  }
}

class Verifier {
  verify(array) {
    if (array.length < 1) return false;
    let adder = function (p, c) {
      return p + c;
    };
    let expected = array[0].reduce(adder);
    let ok = true;
    array.forEach(function (subarray) {
      if (subarray.reduce(adder) !== expected) {
        ok = false;
      }
    });
    return ok;
  }
}

class MagicSquareGenerator {
  constructor() {
    this.generator = new Generator();
    this.splitter = new Splitter();
    this.verifier = new Verifier();
  }

  generate(size) {
    let magicSquare;

    do {
      magicSquare = this.createNewSquare(size);
    } while (!this.isValidMagicSquare(magicSquare));

    return magicSquare;
  }

  createNewSquare(size) {
    const square = [];
    for (let i = 0; i < size; i++) {
      square.push(this.generator.generate(size));
    }
    return square;
  }

  isValidMagicSquare(square) {
    const splitSquare = this.splitter.split(square);
    return this.verifier.verify(splitSquare);
  }
}

module.exports = { MagicSquareGenerator };

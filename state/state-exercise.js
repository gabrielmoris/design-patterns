class CombinationLock {
  constructor(combination) {
    this.combination = combination;
    this.digitsEntered = 0;
    this.reset();
  }

  reset() {
    this.status = "LOCKED";
    this.digitsEntered = 0;
  }

  enterDigit(digit) {
    if (this.status === "LOCKED") {
      this.status = "";
    }

    this.digitsEntered++;
    this.status += digit;
    if (this.status.length === this.combination.length) {
      return this.combination.join("") === this.status
        ? (this.status = "OPEN")
        : (this.status = "ERROR");
    }
  }
}

module.exports = { CombinationLock };

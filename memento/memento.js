class Memento {
  constructor(balance) {
    this.balance = balance;
  }
}

class BankAccount {
  constructor(balance = 0) {
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    return new Memento(this.balance);
  }

  restore(m) {
    this.balance = m.balance;
  }

  toString() {
    return `Balance: ${this.balance}`;
  }
}

let ba = new BankAccount(100);

let m1 = ba.deposit(50);
let m2 = ba.deposit(20);
console.log(ba.toString());

console.log(
  "We can go back to the states m1 and m2, but not to the original state here. We solve it in the undo-redo.js"
);
ba.restore(m1);
console.log(ba.toString());
ba.restore(m2);
console.log(ba.toString());

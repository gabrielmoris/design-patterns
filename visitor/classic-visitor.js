// We have now the same Situation as the intrusive reflective and intrusive example:
// We want to represent wit OOP this numeric expression and evaluate it
// 1 + (2 + 3 )

class NumberExpression {
  constructor(value) {
    this.value = value;
  }

  // This would be the only change dor every object that this pattern needs
  accept(visitor) {
    visitor.visitNumber(this);
  }
}

class AdditionExpression {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }
  accept(visitor) {
    visitor.visitAddition(this);
  }
}

class Visitor {
  constructor() {
    this.buffer = [];
  }

  visitNumber(n) {}
  visitAddition(a) {}
}

class ExpressionPrinter extends Visitor {
  constructor() {
    super();
  }

  visitNumber(n) {
    this.buffer.push(n.value);
  }

  visitAddition(a) {
    this.buffer.push("(");
    a.left.accept(this);
    this.buffer.push("+");
    a.right.accept(this);
    this.buffer.push(")");
  }

  toString() {
    return this.buffer.slice(1, this.buffer.length - 1).join("");
  }
}

// This approach is better because it is scalable.
class ExpressionCalculator extends Visitor {
  constructor() {
    super();
    this.result = 0;
  }

  visitNumber(n) {
    this.result = n.value;
  }

  visitAddition(a) {
    a.left.accept(this);
    let temp = this.result;
    a.right.accept(this);
    this.result += temp;
  }
}

let e = new AdditionExpression(
  new NumberExpression(1),
  new AdditionExpression(new NumberExpression(2), new NumberExpression(3))
);

let ep = new ExpressionPrinter();

ep.visitAddition(e);

console.log(ep.toString());

let ec = new ExpressionCalculator();
ec.visitAddition(e);

console.log(`${ep.toString()} = ${ec.result}`);

class Integer {
  constructor(value) {
    this.value = value;
  }
  accept(visitor) {
    visitor.visitValue(this);
  }
}

class BinaryExpression {
  constructor(lhs, rhs) {
    this.lhs = lhs;
    this.rhs = rhs;
  }
}

class AdditionExpression extends BinaryExpression {
  constructor(lhs, rhs) {
    super(lhs, rhs);
  }
  accept(visitor) {
    visitor.visitAddition(this);
  }
}

class MultiplicationExpression extends BinaryExpression {
  constructor(lhs, rhs) {
    super(lhs, rhs);
  }
  accept(visitor) {
    visitor.visitMultiplication(this);
  }
}

class ExpressionPrinter {
  constructor() {
    this.buffer = [];
  }

  visitValue(value) {
    this.buffer.push(value.value);
  }

  visitAddition(ae) {
    this.buffer.push("(");
    ae.lhs.accept(this);
    this.buffer.push("+");
    ae.rhs.accept(this);
    this.buffer.push(")");
  }

  visitMultiplication(me) {
    me.lhs.accept(this);
    this.buffer.push("*");
    me.rhs.accept(this);
  }

  toString() {
    return this.buffer.join("");
  }
}

module.exports = {
  AdditionExpression,
  MultiplicationExpression,
  Integer,
  ExpressionPrinter,
};

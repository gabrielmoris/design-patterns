// We have now the same Situation as the intrusive Visitor example:
// We want to represent wit OOP this numeric expression and evaluate it
// 1 + (2 + 3 )

class NumberExpression {
  constructor(value) {
    this.value = value;
  }
}

class AdditionExpression {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }
}

class ExpressionPrinter {
  constructor() {
    this.buffer = [];
  }
  print(e) {
    if (e instanceof NumberExpression) {
      this.buffer.push(e.value);
    } else if (e instanceof AdditionExpression) {
      this.buffer.push("(");
      this.print(e.left, this.buffer);
      this.buffer.push("+");
      this.print(e.right, this.buffer);
      this.buffer.push(")");
    }
  }
}

let e = new AdditionExpression(
  new NumberExpression(1),
  new AdditionExpression(new NumberExpression(2), new NumberExpression(3))
);

let ep = new ExpressionPrinter();

ep.print(e);

console.log(ep.buffer.slice(1, ep.buffer.length - 1).join("")); // I Slice because it is (1+(2+3))

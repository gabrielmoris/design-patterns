class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
    this.parent = null;

    if (this.left) {
      this.left.parent = this;
    }
    if (this.right) {
      this.right.parent = this;
    }
  }

  *preorder() {
    const self = this;

    function* traverse(current = self) {
      yield current;
      if (current.left) {
        for (let left of traverse(current.left)) {
          yield left;
        }
      }
      if (current.right) {
        for (let right of traverse(current.right)) {
          yield right;
        }
      }
    }

    for (let node of traverse(this.rootNode)) {
      yield node.value;
    }
  }
}

module.exports = { Node };

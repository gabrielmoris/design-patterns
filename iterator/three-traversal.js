/*
    1
   / \
  2   3
  
  TRAVERSAL:
  inorder: 213
  preorder: 123
  postorder: 231
*/

class Node {
  constructor(val, left = null, right = null) {
    this.value = val;
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
}

function makeInOrderIterator(root) {
  let current = root;
  while (current.left) {
    current = current.left;
  }
  let yieldedStart = false;

  return {
    next: function () {
      if (!yieldedStart) {
        yieldedStart = true;
        return {
          value: current,
          done: false,
        };
      }
      if (current.right) {
        current = current.right;
        while (current.left) {
          current = current.left;
        }
        return {
          value: current,
          done: false,
        };
      } else {
        let p = current.parent;
        while (p && current === p.right) {
          current = p;
          p = p.parent;
        }
        current = p;
        return {
          value: current,
          done: current == null,
        };
      }
    },
    [Symbol.iterator]: function () {
      // Here I cant use an arrow function becaus this must point to the function iterator
      return this;
    },
  };
}

let root = new Node(1, new Node(2), new Node(3));

let it = makeInOrderIterator(root);

for (let n of it) {
  console.log(`Inorder traversal ${n.value}`);
}

// Another example //

class BinaryThree {
  constructor(rootNode) {
    this.rootNode = rootNode;
  }

  [Symbol.iterator]() {
    return makeInOrderIterator(this.rootNode);
  }

  // this function does exactly the same as the iterator but with generator functions. It looks more simple
  *betterInorderIterator() {
    function* traverse(current) {
      if (current.left) {
        for (let left of traverse(current.left)) {
          yield left;
        }
      }
      yield current;
      if (current.right) {
        for (let right of traverse(current.right)) {
          yield right;
        }
      }
    }

    for (let node of traverse(this.rootNode)) {
      yield node;
    }
  }
}

const binaryIterator = new BinaryThree(root);

for (let n of binaryIterator) {
  console.log(`Inorder traversal BinaryThree ${n.value}`);
}

const better = new BinaryThree(root).betterInorderIterator();
for (let n of better) {
  console.log(`Better Inorder traversal BinaryThree ${n.value}`);
}

////// Another example of three traversal //////
class Node2 {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    //Code here
    const newNode = new Node2(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let currentNode = this.root;
      //Infinite loop that stops with a return
      while (true) {
        if (value < currentNode.value) {
          //left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  } //O logN

  lookup(value) {
    //Code here
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        //left

        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        //right

        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return false;
  } //O logN

  //This method is complicated and not all cases are covered, to see it visually:
  //https://visualgo.net/en/bst
  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }
}

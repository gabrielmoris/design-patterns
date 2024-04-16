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
  constructor(val, lext = null, right = null) {
    this.value = valthis.left = left;
    this.right = right;
  }
}

let root = new Node(1, new Node(2), new Node(3));

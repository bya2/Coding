

export default class BinaryTree {
  constructor() {}

  inOrderTraversal(node) {
    if (node) {
      this.inOrderTraversal(node.left);
      this.visit(node);
      this.inOrderTraversal(node.right);
    }
  }

  preOrderTraversal(_node) {
    if (_node) {
      this.visit(_node);
      this.preOrderTraversal(_node.left);
      this.preOrderTraversal(_node.right);
    }
  }

  postOrderTraversal(_node) {
    if (_node) {
      this.postOrderTraversal(_node.left);
      this.postOrderTraversal(_node.right);
      this.visit(_node);
    }
  }
}

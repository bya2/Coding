import Queue from "./Queue.mjs";
import Stack from "./Stack.mjs";
import TreeNode from "./TreeNode.mjs";

export default class Tree {
  _root;

  constructor(_node = null) {
    this._root = _node;
  }

  visit() {}

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

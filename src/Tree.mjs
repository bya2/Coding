import { TreeNode, BTreeNode } from "./node.mjs";

// Tree
// + getHeight
// + getParent ?=> Node
// + getChildren ?=> Node
// + getSiblings
// + getSubTree
// + isComplete

// Binary Tree
// + isFull ->

class Graph {
  root;
  constructor(root) {
    this.root = root;
  }
}

export class Tree extends Graph {
  height;
  *preOrder(node = this.root) {
    yield node;
    if (node.hasChildren()) {
      for (let child of node.children) {
        yield* this.preOrder(child);
      }
    }
  }
  *postOrder(node = this.root) {
    if (node.hasChildren()) {
      for (let child of node.children) {
        yield* this.postOrder(child);
      }
    }
    yield node;
  }
  insert() {

  }
  delete() {

  }
  find() {

  }
}

export class BTree extends Tree {
  *inOrder(node = this.root) {

  }
}

export class Heap {

}

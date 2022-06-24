import Queue from "./Queue.mjs";
import Stack from "./Stack.mjs";
import TreeNode from "./TreeNode.mjs";

// 비순환
// 자체 간선 불가
// 계층 모델
// 순회: DFS, BFS 안의 Pre-, In- Post-
// 노드가 n이면, 간선은 n-1

// 이진 트리, 이진 탐색 트리, 균형(AVL) 트리, 이진 힙

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

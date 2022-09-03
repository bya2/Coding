// Data
export class Node {
  data;
  constructor() {
    this.data = data;
  }
}

// isMarked;
// isLeaf ?=> Graph
// getDepth;
export class GraphNode extends Node {
  marked = false;
  depth = 0;
  adjacents = new Set();
  mark() {
    this.marked = true;
  }
  isMarked() {
    return this.marked;
  }
  isLeaf() {
    return this.adjacents.size;
  }
}

// getLevel
// getDegree
// getChildren
// getSiblings
// getAncestors
export class TreeNode extends Node {
  parent = null;
  children = [];
  constructor(parent, children) {
    this.parent = parent;
    this.children = children;
  }
  isRoot() {
    return this.parent === null;
  }
  isLeaf() {
    return this.children.length === 0;
  }
  hasChildren() {
    return !this.isLeaf();
  }
}

// getLeft
// getRight
export class BTreeNode extends TreeNode {
  get left() {
    return this.children[0] ?? null;
  }
  get right() {
    return this.children[1] ?? null;
  }
  swap() {
    const { children } = this;
    [children[0], children[1]] = [children[1], children[0]];
  }
}

export class BSTreeNode {
  
}
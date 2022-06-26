import { Queue } from "./List.mjs";

const pseudocodeOfBFS = (_root) => {
  let queue = new Queue();
  _root.visited = true;
  queue.enqueue(_root);

  while (!queue.isEmpty) {
    let node = queue.dequeue();

    // processing...

    for (let adjNode of node.adjacent) {
      if (!adjNode.visited) {
        adjNode.visited = true;
        queue.enqueue(adjNode);
      }
    }
  }
};

const pseudocodeOfDFS = (_root) => {
  if (_root === null) return;

  // processing...

  _root.visited = true;

  for (let adjNode of _root.adjacent) {
    if (!adjNode.visited) {
      pseudocodeOfDFS(adjNode);
    }
  }
};

export class Graph {
  _root;

  constructor(_root) {
    this._root = _root;
  }

  BFS() {
    let queue = new Queue();
    this._root.visited = true;
    queue.enqueue(this._root);

    while (!queue.isEmpty) {
      let node = queue.dequeue();

      this.visit(node);

      for (let adjNode of node.adjacent) {
        if (!adjNode.visited) {
          adjNode.visited = true;
          queue.enqueue(adjNode);
        }
      }
    }
  }

  DFS() {}

  visit(_node) {}
}

export class Tree extends Graph {
  inOrder() {}

  preOrder() {}

  postOrder() {}
}

import Queue from "./Queue.mjs";
import GraphNode from "./GraphNode.mjs"

export default class Graph {
  _n;
  _matrix;
  _root;

  _adjacencyList;
  _adjacencyMatrix;

  constructor() {}

  addEdge(i, j) {

  }

  BFS() {
    const queue = new Queue();
    this._root.visited = true;
    queue.enqueue(this._root);

    while (!queue.isEmpty) {
      const currNode = queue.dequeue();

      for (const adjNode of currNode.adjacent) {
        if (!adjNode.visited) {
          adjNode.visited = true;
          queue.enqueue(adjNode);
        }
      }
    }
  }

  DFS() {
    if (this._root === null) return;

    this._root.visited = true;

    for (const adjNode of this._root.adjacent) {
      if (!adjNode.visited) {
        this.DFS();
      }
    }

    this.DFS();
  }
}

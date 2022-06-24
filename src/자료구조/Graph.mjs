import Queue from "./Queue.mjs";
import { GNode } from "./Node.mjs";

// 방향 및 무방향 그래프
// 순환 그래프
// 자체 간선 가능
// 네트워크 모델
// 순회: DFS, BFS

export default class Graph {
  _root;
  _matrix;

  _n = 0;
  _edges = 0;

  constructor() {}

  add(_node) {

  }

  addEdge(i, j) {
    // list


    // matrix
    
  }

  BFS(_node) {
    // QUEUE
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

  DFSUtil() {}

  DFS(_node) {
    // STACK
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

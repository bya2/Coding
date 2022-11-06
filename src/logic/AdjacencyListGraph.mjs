import Arr from "./Array.mjs";
import ArrQueue from "./ArrayQueue.mjs";

export class Node {
  data;
  adjacencyList = new Set();
  _marked = false;

  constructor(data, adjacencyList = new Set()) {
    this.data = data;
    this.adjacencyList = adjacencyList;
  }

  isMarked() {
    return this._marked;
  }

  mark() {
    this._marked = true;
  }

  clear() {
    this._marked = false;
  }
}

export default class AdjacencyListGraph extends Map {
  root;

  constructor(node) {
    super();
    if (typeof node !== "undefined") {
      this.root = node;
    }
  }

  convertArrToSet(nArr = [[]]) {
    for (let i = 0, len = nArr.length; i < len; ++i) {
      this.set(i, new Set(nArr[i]));
    }
  }

  addVertex(node) {
    if (!this.has(node)) {
      this.set(node, new Set());
    }
  }

  addEdge(node1, node2) {
    this.get(node1).add(node2);
    this.get(node2).add(node1);
  }

  removeEdge(node1, node2) {
    this.get(node1).delete(node2);
    this.get(node2).delete(node1);
  }

  connectAll() {
    for (let curr of this.keys()) {
      for (let node of this.keys()) {
        if (!Object.is(curr, node)) {
          this.addEdge(curr, node);
        }
      }
    }
  }

  searchDepthFirst(cb, args) {
    let height = 0;

    const DFS = (curr, { depth }, args) => {
      if (typeof curr === "undefined" || curr === null) throw new Error();

      height = Math.max(height, depth);

      if (this.has(curr)) {
        curr.mark();
        for (const adj of this.get(curr)) {
          if (!adj.isMarked()) {
            const [condition, ...params] = cb?.(adj.data, ...args) || [true];
            condition && DFS(adj, { depth: depth + 1 }, params);
          }
        }
        curr.clear();
      }
    };

    for (const node of this.keys()) {
      const [condition, ...params] = cb?.(node.data, ...args) || [true];
      condition && DFS(node, { depth: 0 }, params);
    }

    height++;

    return {
      height,
    };
  }

  searchBreadthFirst() {
    const queue = new ArrQueue();
    queue.enqueue(this.root);
    this.root.mark();

    let depth = 0;
    for (; !queue.isEmpty(); ++depth) {
      for (let queueSize = queue.length; queueSize > 0; --queueSize) {
        let curr = queue.dequeue();
        curr.depth = depth;

        if (this.has(curr)) {
          for (const adj of this.get(curr)) {
            if (!adj.isMarked()) {
              queue.enqueue(adj);
              adj.mark();
            }
          }
        }
      }
    }

    return {
      height: depth,
    };
  }
}

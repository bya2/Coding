class Queue {
  data;
  size;
  constructor(data = []) {
    this.data = data;
    this.size = data.length;
  }
  get size() {
    return this.data.length;
  }
  get front() {
    return this.data[0];
  }
  get rear() {
    return this.data[this.size - 1];
  }
  enqueue(element) {
    if (typeof element !== "undefined") {
      ++this.size;
      this.data.push(element);
    }
  }
  dequeue() {
    if (this.size >= 1) {
      --this.size;
      return this.data.shift();
    }
  }
  isEmpty() {
    return this.data.length === 0;
  }
}

export class Node {
  id;
  data;
  depth = 0;
  isLeaf = false;
  isMarked = false;

  constructor(data) {
    this.data = data;
  }
}

export class GraphNode {
  _adjacents = new Map();

  get adjacents() {
    return this._adjacents;
  }

  addAdjacent(node) {
    this._adjacents.set(node.id, node);
  }

  removeAdjacent(node) {
    this._adjacents.delete(node.id);
  }

  isAdjacent(node) {
    return this._adjacents.has(node.id);
  }
}

export class SparseGraph {
  rootNode;
  _adjacencyList = new Map();

  constructor(root) {
    this.rootNode = root;
  }

  get adjacencyList() {
    return this._adjacencyList;
  }

  setAdjacencyList(edges) {
    for (let [nodeId1, nodeId2] of edges) {
      this._adjacencyList.set(
        nodeId1,
        this._adjacencyList.has(nodeId1) ? [...this._adjacencyList.get(nodeId1), nodeId2] : [nodeId2]
      );
      this._adjacencyList.set(
        nodeId2,
        this._adjacencyList.has(nodeId2) ? [...this._adjacencyList.get(nodeId2), nodeId1] : [nodeId1]
      );
    }
  }

  BFS() {
    const queue = new Queue();
    queue.enqueue(this.rootNode);
    this.rootNode.isMarked = true;

    let maxDepth = 0;
    let leafs = [];
    // 깊이, 큐->LinkedList로, 인접리스트
    for (let depth = 0; !queue.isEmpty(); ++depth) {
      if (queue.isEmpty()) {
        maxDepth = depth;
        break;
      }

      const queueSize = queue.size;
      for (let i = 0; i < queueSize; ++i) {
        const currNode = queue.dequeue();
        currNode.depth = depth;

        // 인접리스트 주변에 있는가 없는가.
        if (this._adjacencyList.has(currNode.id)) {
          for (const adjNode of this._adjacencyList.get(currNode.id)) {
            // 마크여부
            if (!adjNode.isMarked) {
              queue.enqueue(adjNode);
              adjNode.isMarked = true;
            }
          }
        } else {
          currNode.isLeaf = true;
          leafs.push(currNode);
        }
      }
    }

    return [maxDepth, leafs];
  }
}

export const other = (n, edges) => {
  let root = new GraphNode(1);
  let graph = new SparseGraph(n, root, edges);
};

export const solution = (n, edges) => {
  let adjList = Array.from({ length: n + 1 }, () => []);
  for (let [i, j] of edges) {
    adjList[i - 1].push(j - 1);
    adjList[j - 1].push(i - 1);
  }

  let queue = new Queue();
  queue.enqueue(0);
  let marked = [1];

  while (!queue.isEmpty()) {
    const SIZE = queue.size;
    for (let i = 0; i < SIZE; ++i) {
      const curr = queue.dequeue();
      for (let adj of adjList[curr]) {
        if (!marked[adj]) {
          marked[adj] = marked[curr] + 1;
          queue.enqueue(adj);
        }
      }
    }
  }

  const max = Math.max(...marked);
  return marked.filter((el) => el === max).length;
};

export const examples__arr = [
  {
    n: 6,
    edges: [
      [3, 6],
      [4, 3],
      [3, 2],
      [1, 3],
      [1, 2],
      [2, 4],
      [5, 2],
    ],
    answer: 3,
  },
];

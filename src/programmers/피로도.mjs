class Node {
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

class AdjacencyListGraph extends Map {
  root;

  constructor(node) {
    super();
    if (typeof node !== "undefined") {
      this.root = node;
    }
  }

  addVertex(node) {
    if (!this.has(node)) {
      this.set(node, new Set());
    }
  }

  connectEdge(node1, node2) {
    this.addVertex(node1);
    this.addVertex(node2);

    this.get(node1).add(node2);
    node1.adjacencyList.add(node2);

    this.get(node2).add(node1);
    node2.adjacencyList.add(node1);
  }

  connectAll() {
    for (let curr of this.keys()) {
      for (let node of this.keys()) {
        if (!Object.is(curr, node)) {
          this.connectEdge(curr, node);
        }
      }
    }
  }

  searchDepthFirst(cb, ...args) {
    let height = 0;

    const DFS = (curr, { depth }, args) => {
      if (typeof curr === "undefined" || curr === null) throw new Error();

      height = Math.max(height, depth);

      if (this.has(curr)) {
        curr.mark();
        for (const adj of this.get(curr)) {
          if (!adj.isMarked()) {
            const [condition, ...args2] = cb(adj.data, ...args);
            condition && DFS(adj, { depth: depth + 1 }, args2);
          }
        }
        curr.clear();
      }
    };

    for (const node of this.keys()) {
      const [condition, ...args2] = cb(node.data, ...args);
      condition && DFS(node, { depth: 0 }, args2);

    }

    height++;

    return {
      height,
    };
  }
}

export const solution = (k, dungeons) => {
  const graph = new AdjacencyListGraph();
  for (let i = 0, len = dungeons.length; i < len; ++i) {
    const node = new Node(dungeons[i]);
    graph.addVertex(node);
  }
  graph.connectAll();

  const obj = graph.searchDepthFirst(([minimum, cost], k) => {
    return [k >= minimum, k - cost];
  }, k);

  return obj.height;
};

export const ssolution = (k, dungeons) => {
  let height = 0;
  const len = dungeons.length;
  const visited = Array.from({ length: len }, () => false);

  const dfs = (node, k, depth) => {
    height = Math.max(height, depth);
    visited[node] = true;
    for (let i = 0; i < len; ++i) {
      const [minimum, cost] = dungeons[i];
      console.log(minimum, cost, k - cost);
      if (!visited[i] && k >= minimum) {
        dfs(i, k - cost, depth + 1);
      }
    }
    visited[node] = false;
  };

  for (let i = 0; i < len; ++i) {
    const [minimum, cost] = dungeons[i];
    if (k >= minimum) {
      dfs(i, k - cost, 0);
    }
  }

  height++;

  return height;
};

export const examples__arr = [
  {
    k: 80,
    dungeons: [
      [80, 20],
      [50, 40],
      [30, 10],
    ],
    answer: 3,
  },
];

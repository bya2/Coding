import AdjacencyListGraph, { Node } from "../../logic/AdjacencyListGraph.mjs";

export const solution = (k, dungeons) => {
  const graph = new AdjacencyListGraph();
  for (let i = 0, len = dungeons.length; i < len; ++i) {
    const node = new Node(dungeons[i]);
    graph.addVertex(node);
  }
  graph.connectAll();

  const { height } = graph.searchDepthFirst(([minimum, cost], k) => [k >= minimum, k - cost], [k]);

  return height;
};

export const prev_solution = (k, dungeons) => {
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

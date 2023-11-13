/**
 * @param {any[]} V 정점 집합
 * @param {Map<any, any[]>} E 간선 집합
 * @param {any[]} R 시작 정점
 */
const DFS = (V, E, R) => {
  const discovered = new Map();

  discovered.set(R, true);

  const recur = (node) => {
    if (!discovered.has(node)) {
      return;
    }
  };

  return recur(R);
};

// class DFS {
//   constructor(graph, start) {
//     this.stack = [];
//     this.vm = new Map();
//     for (const node of graph.keys()) this.vm.set(node, false);
//     this.g = graph;
//     this.moveTo(start);
//   }

//   moveTo(start) {
//     this.stack.length = 0;
//     this.stack.push(start);
//   }

//   *[Symbol.iterator]() {
//     let node;
//     while ((node = this.stack.pop())) {
//       if (this.vm.get(node)) continue;

//       this.vm.set(node, true);
//       yield node;
//     }
//   }
// }

/**
 * @param {string[]} lines
 */
export const solution2 = (lines) => {
  const [[N, M, R], ...edges] = lines.map((line) =>
    line.split(" ").map(Number)
  );

  const g = edges.reduce((obj, [u, v]) => {
    if (u in obj) obj[u].push(v);
    else obj[u] = [v];

    if (v in obj) obj[v].push(u);
    else obj[v] = [u];

    return obj;
  }, {});

  const vm = Object.keys(g).reduce((obj, t) => ((obj[t] = false), obj), {});

  const ord = Array(N + 1).fill(0);

  let i = 0;

  (function DFS(node) {
    vm[node] = true;
    ord[node] = ++i;
    for (const adj of g[node].sort((a, b) => a - b)) {
      if (!vm[adj]) {
        DFS(adj);
      }
    }
  })(R);

  ord.shift();
  return ord.join("\n");
};

export const solution = (lines) => {
  const [[N, M, R], ...edges] = lines.map((line) =>
    line.split(" ").map(Number)
  );

  const g = new Map();
  for (const [u, v] of edges) {
    if (g.has(u)) g.get(u).push(v);
    else g.set(u, [v]);

    if (g.has(v)) g.get(v).push(u);
    else g.set(v, [u]);
  }

  console.log(g);

  const vm = new Map();
  for (const n of g.keys()) vm.set(n, false);

  const STACK = [];
  const ord = Array(N + 1).fill(0);

  let node;
  let i = 0;
  STACK.push(R);
  while ((node = STACK.pop())) {
    if (vm.get(node)) continue;

    vm.set(node, true);
    ord[node] = ++i;

    for (const adj of g.get(node).sort((a, b) => a - b)) {
      console.log(node, adj, g.get(node));
      if (!vm.get(adj)) {
        STACK.push(adj);
      }
    }
  }

  ord.shift();
  return ord.join("\n");
};

export const examples = [
  {
    inputs: `5 5 1
    1 4
    1 2
    2 3
    2 4
    3 4`,
    answer: `1
    2
    3
    4
    0`,
  },
];

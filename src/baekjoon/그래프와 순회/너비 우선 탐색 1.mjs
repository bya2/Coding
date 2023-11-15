/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
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
  const queue = [];

  (function BFS(node) {
    vm[node] = true;
    queue.push(node);
    ord[node] = ++i;

    while (queue.length) {
      const u = queue.shift();
      for (const adj of g[u].sort((a, b) => a - b)) {
        if (!vm[adj]) {
          vm[adj] = true;
          queue.push(adj);
          ord[adj] = ++i;
        }
      }
    }
  })(R);

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
    4
    3
    0`,
  },
];

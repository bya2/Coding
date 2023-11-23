/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  const [[n], ...inputs] = lines.map((line) => line.split(" ").map(Number));

  const g = {};

  for (const [a, ...b] of inputs) {
    for (let i = 0; i < b.length - 1; i += 2) {
      if (!(a in g)) g[a] = [];
      if (!(b[i] in g)) g[b[i]] = [];
      g[a].push({
        v: b[i],
        d: b[i + 1],
      });
      g[b[i]].push({
        v: a,
        d: b[i + 1],
      });
    }
  }

  const visited = Array.from({ length: n + 1 }, () => 0);

  const STACK = [inputs[0][0]];
  let curr;
  let acc = 0;
  let max = 0;
  while ((curr = STACK.pop())) {
    const { v, d } = curr;

    if (visited[v]) {
      max = Math.max(max, acc);
      acc = 0;
      continue;
    }

    visited[v] = true;
    acc += d;

    for (const adj of g[v]) {
      if (!visited[adj[0]]) {
        STACK.push(adj);
      }
    }
  }

  return max;
};

export const examples = [
  {
    inputs: `5
    1 3 2 -1
    2 4 4 -1
    3 1 2 4 3 -1
    4 2 4 3 3 5 6 -1
    5 4 6 -1`,
    answer: `11`,
  },
];

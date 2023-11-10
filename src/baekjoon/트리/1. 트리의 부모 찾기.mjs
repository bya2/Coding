/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  const [[n], ...inputs] = lines.map((line) => line.split(" ").map(Number));

  const ROOT = 1;
  const g = {};

  for (const [a, b] of inputs) {
    if (!(a in g)) g[a] = [];
    if (!(b in g)) g[b] = [];
    g[a].push(b);
    g[b].push(a);
  }

  const results = Array.from({ length: n + 1 }, () => -1);

  (function recur(curr = ROOT) {
    for (const i of g[curr]) {
      if (results[i] === -1) {
        results[i] = curr;
        recur(i);
      }
    }
  })();

  return results.slice(2).join("\n");
};

export const examples = [
  {
    inputs: `7
    1 6
    6 3
    3 5
    4 1
    2 4
    4 7`,
    answer: `4
    6
    1
    3
    1
    4`,
  },
];

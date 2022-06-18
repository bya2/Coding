export const solution = (n, edges) => {
  edges.sort((a, b) => a[1] - b[1]);
  edges.sort((a, b) => a[0] - b[0]);

  const matrix = Array.from({ length: n + 1 }, () => Array.from({ length: n + 1 }, () => 0));
  for (const [a, b] of edges) {
    matrix[a][b] = 1;
    matrix[b][a] = 1;
  }

  let distance = 0;

  const dfs = (_lv, _nodeId, visited) => {

    for (let i = 1; i <= n; ++i) {
      if (i !== _nodeId && matrix[_nodeId][i] === 1 && !visited.includes(i)) {
        visited.push(i)
        dfs(_lv + 1, i, visited);
        distance = distance > _lv + 1 ? distance : _lv + 1;
      }
    }
  };

  dfs(0, 1, [1]);

  return distance;
};

const exMat = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0],
  [0, 1, 0, 1, 1, 1, 0],
  [0, 1, 1, 0, 1, 0, 1],
  [0, 0, 1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0],
];

export const examples__arr = [
  {
    n: 6,
    edge: [
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

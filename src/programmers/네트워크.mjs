export const solution = (n, computers) => {
  let networks = 0;

  const DFS = (i) => {
    if (computers[i][i] === 0) {
      return;
    }
    computers[i][i] = 0;

    for (let j = 0; j < n; ++j) {
      if (computers[i][j]) {
        DFS(j);
      }
    }
  };

  for (let i = 0; i < n; ++i) {
    // 컴퓨터마다
    if (computers[i][i] === 1) {
      // 방문하지 않았다면,
      DFS(i);
      networks++;
    }
  }

  return networks;
};

export const origin = (n, computers) => {
  let nets__num = 0;
  const visited__arr = Array.from({ length: n }, () => false);

  const dfs = (_idx) => {
    if (visited__arr[_idx]) return;
    visited__arr[_idx] = true;

    for (let i = 0; i < n; ++i) {
      if (computers[_idx][i]) {
        dfs(i);
      }
    }
  };

  for (let i = 0; i < n; ++i) {
    if (!visited__arr[i]) {
      dfs(i);
      ++nets__num;
    }
  }

  return nets__num;
};

export const examples__arr = [
  {
    n: 3,
    computers: [
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 1],
    ],
    answer: 2,
  },
  {
    n: 3,
    computers: [
      [1, 1, 0],
      [1, 1, 1],
      [0, 1, 1],
    ],
    answer: 1,
  },
];

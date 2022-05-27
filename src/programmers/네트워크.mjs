// DFS/BFS - 2
// 컴퓨터의 갯수, 연결에 대한 정보
export const solution = (n, computers) => {
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

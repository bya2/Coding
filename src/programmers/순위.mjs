export const solution = (n, results) => {
  // 플로이드-와샬 알고리즘
  let mat = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
  for (let [w, l] of results) {
    mat[w - 1][l - 1] = 1;
    mat[l - 1][w - 1] = -1;
  }

  for (let mid = 0; mid < n; ++mid) {
    for (let i = 0; i < n; ++i) {
      for (let j = 0; j < n; ++j) {
        if (mat[i][mid] === 1 && mat[mid][j] === 1) mat[i][j] = 1;
        if (mat[i][mid] === -1 && mat[mid][j] === -1) mat[i][j] = -1;
      }
    }
  }

  let answer = 0;
  for (let i = 0; i < n; ++i) {
    let acc = true;
    for (let j = 0; j < n; ++j) {
      if (i !== j && mat[i][j] === 0) {
        acc = false;
      }
    }

    if (acc) {
      ++answer;
    }
  }

  return answer;
};

export const examples__arr = [
  {
    n: 5,
    results: [
      [4, 3],
      [4, 2],
      [3, 2],
      [1, 2],
      [2, 5],
    ],
    answer: 2,
  },
];

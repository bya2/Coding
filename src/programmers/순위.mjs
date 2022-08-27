export const floyd = (n, adjMat) => {
  // '경유'라는 개념
  const dist = Array.from({ length: n }, () => Array.from({ length: n }, () => Infinity));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) {
        dist[i][j] === 0;
      } else if (adjMat[i][j]) {
        dist[i][j] = adjMat[i][j];
      }
    }
  }

  for (let mid = 0; mid < n; mid++) {
    for (let from = 0; from < n; from++) {
      for (let to = 0; to < n; to++) {
        dist[from][to] = Math.min(dist[from][to], dist[from][mid] + dist[mid][to]);
      }
    }
  }

  return dist;
};

export const solution = (n, results) => {
  // 플로이드-와샬 알고리즘
  let adjMat = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
  for (let [w, l] of results) {
    adjMat[w - 1][l - 1] = 1;
    adjMat[l - 1][w - 1] = -1;
  }

  for (let mid = 0; mid < n; ++mid) {
    for (let from = 0; from < n; ++from) {
      for (let to = 0; to < n; ++to) {
        if (adjMat[from][mid] === 1 && adjMat[mid][to] === 1) adjMat[from][to] = 1;
        if (adjMat[from][mid] === -1 && adjMat[mid][to] === -1) adjMat[from][to] = -1;
      }
    }
  }

  let count = 0;
  let hasResult;
  for (let i = 0; i < n; ++i) {
    hasResult = true;
    for (let j = 0; j < n; ++j) {
      if (i !== j && adjMat[i][j] === 0) {
        hasResult = false;
      }
    }

    if (hasResult) {
      ++count;
    }
  }

  return count;
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

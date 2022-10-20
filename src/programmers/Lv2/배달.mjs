/**
 * @param {number} N 정점의 수
 * @param {number[]} roads A, B: 간선, C: 비용
 * @param {number} K 최대 비용
 */
export const solution2 = (N, roads, K) => {
  const adjMat = Array.from({ length: N + 1 }, () => Array.from({ length: N + 1 }, () => Infinity));

  for (let [v1, v2, cost] of roads) {
    adjMat[v1][v2] = adjMat[v1][v2] ? Math.min(adjMat[v1][v2], cost) : cost;
    adjMat[v2][v1] = adjMat[v2][v1] ? Math.min(adjMat[v2][v1], cost) : cost;
  }

  floydWarshall(adjMat);

  return adjMat[1].slice(2).filter((n) => n <= K).length + 1;
};

const floydWarshall = (dist) => {
  const len = dist.length;
  for (let mid = 0; mid < len; ++mid) {
    for (let from = 0; from < len; ++from) {
      for (let to = 0; to < len; ++to) {
        dist[from][to] = Math.min(dist[from][to], dist[from][mid] + dist[mid][to]);
      }
    }
  }
};

export const solution = (N, roads, K) => {
  const queue = [];
  const adjMat = Array.from(Array(N + 1), () => new Array());
  const dist = Array.from({ length: N + 1 }, () => Infinity);

  for (const [a, b, c] of roads) {
    adjMat[a].push({ to: b, weight: c });
    adjMat[b].push({ to: a, weight: c });
  }

  queue.push({
    to: 1,
    weight: 0,
  });

  dist[1] = 0;

  (function () {
    while (queue.length) {
      let curr = queue.shift();
      for (let adj of adjMat[curr.to]) {
        if (dist[adj.to] > dist[curr.to] + adj.weight) {
          dist[adj.to] = dist[curr.to] + adj.weight;
          queue.push(adj);
        }
      }
    }
  })();

  return dist.filter((n) => n <= K).length;
};

export const examples__arr = [
  {
    N: 5,
    road: [
      [1, 2, 1],
      [2, 3, 3],
      [5, 2, 2],
      [1, 4, 2],
      [5, 3, 1],
      [5, 4, 2],
    ],
    K: 3,
    answer: 4,
  },
  {
    N: 6,
    road: [
      [1, 2, 1],
      [1, 3, 2],
      [2, 3, 2],
      [3, 4, 3],
      [3, 5, 2],
      [3, 5, 3],
      [5, 6, 1],
    ],
    K: 4,
    answer: 4,
  },
];

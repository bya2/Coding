/**
 * @param {number} k 최대 점수
 * @param {number} m 한 상자에 담는 개수
 * @param {number[]} scores 점수s
 * - p점: 최하품
 * - k점: 최상품
 * - 사과 한 상자의 점수: p*m
 * @return {number} 이익
 */
export const solution = (k, m, scores) => {
  const map = scores.reduce((map, t) => (map.set(t, (map.get(t) || 0) + 1), map), new Map());
  const keys = [...map.keys()].sort((a, b) => a - b);
  const prices = [];

  for (let i = keys.length - 1; i >= 0; --i) {
    const p = keys[i];
    const q = ~~(map.get(p) / m);
    if (q > 0) prices.push(p * m * q);

    if (i >= 1) {
      const np = keys[i - 1];
      const r = map.get(p) % m;
      map.set(np, map.get(np) + r);
    }
  }

  return prices.reduce((a, b) => a + b, 0);
};

export const fail_solution__time_exceed = (k, m, scores) => {
  scores.sort((a, b) => b - a);
  const prices = [];
  while (scores.length >= m) {
    const p = scores.splice(0, m)[m - 1];
    prices.push(p * m);
  }
  return prices.reduce((a, b) => a + b);
};

export const examples__arr = [
  {
    k: 3,
    m: 4,
    score: [1, 2, 3, 1, 2, 3, 1],
    answer: 8,
  },
  {
    k: 4,
    m: 3,
    score: [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2],
    answer: 33,
  },
];

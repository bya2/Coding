export const solution = (n, left, right) => {
  const arr = [];
  for (let i = left; i <= right; ++i) {
    arr.push(Math.max(i % n, (i / n) >> 0) + 1);
  }
  return arr;
};

export const examples__arr = [
  { n: 3, left: 2, right: 5, answer: [3, 2, 2, 3] },
  {
    n: 4,
    left: 7,
    right: 14,
    answer: [4, 3, 3, 3, 4, 4, 4, 4],
  },
];

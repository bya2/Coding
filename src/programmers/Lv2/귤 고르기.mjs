/**
 * @param {number} k
 * @param {number[]} tangerine
 */
export const solution = (k, tangerine) => {
  const map = tangerine.reduce(
    (obj, t) => ((obj[t] = obj[t] ? obj[t] + 1 : 1), obj),
    {}
  );
  const values = Object.values(map).sort((a, b) => b - a);
  for (let i = 0, len = values.length; i < len; ++i) {
    k -= values[i];
    if (k <= 0) return i + 1;
  }
  return values.length;
};

export const examples__arr = [
  {
    k: 6,
    tangerine: [1, 3, 2, 5, 4, 5, 2, 3],
    answer: 3,
  },
  {
    k: 4,
    tangerine: [1, 3, 2, 5, 4, 5, 2, 3],
    answer: 2,
  },
  {
    k: 2,
    tangerine: [1, 1, 1, 1, 2, 2, 2, 3],
    answer: 1,
  },
];

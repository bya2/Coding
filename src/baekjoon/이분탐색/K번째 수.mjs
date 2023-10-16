import "./logic.mjs";

/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  const [n, k] = lines.map(Number);

  let minimum = 1;
  let maximum = k;

  while (minimum <= maximum) {
    let median = (minimum + maximum) >> 1;

    let count = 0;
    for (let i = 1; i <= n; ++i) {
      count += Math.min((median / i) >> 0, n);
    }

    if (count >= k) maximum = --median;
    else minimum = ++median;
  }

  return minimum + "";
};

export const examples = [
  {
    inputs: `3
    7`,
    answer: `6`,
  },
];

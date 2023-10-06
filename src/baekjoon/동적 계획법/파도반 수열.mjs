const memo = [
  0,
  1,
  1,
  1,
  2,
  2,
  3,
  4,
  5,
  7,
  9,
  ...Array.from({ length: 90 }, () => 0),
];

/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  const fibo = (n) => {
    if (memo[n]) return memo[n];
    else return (memo[n] = fibo(n - 1) + fibo(n - 5));
  };

  lines.shift();
  return lines
    .map((n) => {
      return fibo(+n);
    })
    .join("\n");
};

export const examples = [
  {
    inputs: `2
    6
    12`,
    answer: `3
    16`,
  },
];

export const solution = (inputs = [""]) => {
  const [n, k] = inputs;

  let minimum = 1;
  let maximum = n ** 2;

  while (minimum <= maximum) {
    const median = ~~((minimum + maximum) / 2);
    let count = 0;
    for (let i = 1; i <= n; ++i) count += Math.min(n, ~~(median / i));
    if (count >= k) maximum = median - 1;
    else minimum = median + 1;
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

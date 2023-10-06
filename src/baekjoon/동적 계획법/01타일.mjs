const memo = Array.from({ length: 1_000_001 }, () => 0);

/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  const n = +lines[0];

  memo[1] = 1;
  memo[2] = 2;
  memo[3] = 3;
  for (let i = 4; i <= n; ++i) {
    memo[i] = (memo[i - 1] + memo[i - 2]) % 15746;
  }

  return memo[n] + "";
};

export const examples = [
  {
    inputs: `4`,
    answer: `5`,
  },
];

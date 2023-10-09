const dp = Array.from({ length: 10 }, () =>
  Array.from({ length: 10 }, () => 0)
);

for (let i = 1; i < 10; ++i) {
  dp[1][i] = 1;
}

/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  const DENOMINATOR = 1_000_000_000;

  const n = +lines[0];
  // i: 앞, j: 뒤
  for (let i = 2; i <= n; ++i) {
    for (let j = 0; j < 10; ++j) {
      if (j === 0) dp[i][0] = dp[i - 1][1];
      else if (j >= 1 && j <= 8) dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j + 1];
      else dp[i][9] = dp[i - 1][8];
    }
  }

  return (dp[n].reduce((a, b) => a + b, 0) % DENOMINATOR) + "";
};

export const examples = [
  {
    inputs: `1`,
    answer: `9`,
  },
  {
    inputs: `2`,
    answer: `17`,
  },
];

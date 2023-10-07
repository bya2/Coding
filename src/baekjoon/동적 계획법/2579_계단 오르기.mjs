/**
 * dp 점화식
 * @param {string[]} lines
 */
export const solution = (lines) => {
  const N = +lines.shift();
  const costs = lines.map(Number);

  const dp = Array(N);
  dp[0] = costs[0];
  dp[1] = costs[0] + costs[1];
  dp[2] = Math.max(costs[0], costs[1]) + costs[2];

  for (let i = 3; i < costs.length; ++i) {
    dp[i] = Math.max(dp[i - 3] + costs[i - 1] + costs[i], dp[i - 2] + costs[i]);
  }

  return dp[N - 1] + "";
};

export const examples = [
  {
    inputs: `6
    10
    20
    15
    25
    10
    20`,
    answer: `75`,
  },
];

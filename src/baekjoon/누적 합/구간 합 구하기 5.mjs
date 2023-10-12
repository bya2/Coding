/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  const [N, _] = lines[0].split(" ").map(Number);
  const LEN = lines.length;
  const T = [];
  const inputs = [];
  for (let i = 1; i <= N; ++i) T.push(lines[i].split(" ").map(Number));
  for (let i = N + 1; i < LEN; ++i)
    inputs.push(lines[i].split(" ").map(Number));

  const dp = Array.from({ length: N + 1 }, () => new Array(N + 1).fill(0));

  for (let i = 1; i <= N; ++i) {
    for (let j = 1; j <= N; ++j) {
      dp[i][j] =
        T[i - 1][j - 1] + dp[i][j - 1] + dp[i - 1][j] - dp[i - 1][j - 1];
    }
  }

  return inputs
    .map((input) => {
      let [x1, y1, x2, y2] = input;
      x1--;
      y1--;
      return dp[x2][y2] - dp[x1][y2] - dp[x2][y1] + dp[x1][y1];
    })
    .join("\n");
};

export const examples = [
  {
    inputs: `4 3
    1 2 3 4
    2 3 4 5
    3 4 5 6
    4 5 6 7
    2 2 3 4
    3 4 3 4
    1 1 4 4`,
    answer: `27
    6
    64`,
  },
];

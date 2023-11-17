/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  const n = +lines[0];

  const dp = [0, 0];
  const before = [];

  for (let i = 2; i <= n; ++i) {
    dp[i] = dp[i - 1] + 1;
    before[i] = i - 1;

    if (i % 3 === 0 && dp[i] > dp[i / 3] + 1) {
      dp[i] = Math.min(dp[i], dp[i / 3] + 1);
      before[i] = i / 3;
    }

    if (i % 2 === 0 && dp[i] > dp[i / 2] + 1) {
      dp[i] = Math.min(dp[i], dp[i / 2] + 1);
      before[i] = i / 2;
    }
  }

  const seq = [];
  for (let i = n; i > 0; i = before[i]) {
    seq.push(i);
  }

  let s = "";
  s += dp[n] + "\n";
  s += seq.join(" ");

  return s;
};

export const examples = [
  {
    inputs: `2`,
    answer: `1
    2 1`,
  },
  {
    inputs: `10`,
    answer: `3
    10 9 3 1`,
  },
];

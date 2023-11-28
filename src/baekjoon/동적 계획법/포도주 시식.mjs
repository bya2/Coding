/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  // const n = +lines[0];
  // lines = lines.map(Number);
  // lines[0] = 0;

  const [n, ...inputs] = lines.map(Number);

  // 1. 포도주 잔을 선택하면 그 잔에 들어있는 포도주는 모두 마셔야 하고, 마신 후에는 원래 위치에 다시 놓아야 한다.
  // 2. 연속으로 놓여 있는 3잔을 모두 마실 수는 없다.
  // dp[n] = max(dp[n-3] + arr[n-1] + arr[n], dp[n-2] + arr[n], dp[n-1])
  // 인덱스므로 조정

  const dp = Array.from({ length: n }, () => 0);
  dp[1] = inputs[0];
  dp[2] = inputs[0] + inputs[1];

  for (let i = 3; i <= n; ++i) {
    dp[i] = Math.max(
      dp[i - 3] + inputs[i - 2] + inputs[i - 1], // dp[n-3] 이후 n-2 거름 n-1번째 + n번째
      dp[i - 2] + inputs[i - 1], // dp[n-2] 이후 n-1 거름 n번째
      dp[i - 1] // dp[n-1]
    );
  }

  return dp[n] + "";
};

export const examples = [
  {
    inputs: `6
    6
    10
    13
    9
    8
    1`,
    answer: `33`,
  },
];

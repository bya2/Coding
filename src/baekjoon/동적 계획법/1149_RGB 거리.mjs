const HOUSES = 1000;
const COLORS = 3;

const memo = Array.from({ length: HOUSES + 1 }, () =>
  Array.from({ length: COLORS }, () => 0)
);

/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  const N = +lines[0];

  for (let i = 1; i <= N; ++i) {
    const [r, g, b] = lines[i].split(" ").map(Number);
    memo[i][0] = Math.min(memo[i - 1][1], memo[i - 1][2]) + r;
    memo[i][1] = Math.min(memo[i - 1][0], memo[i - 1][2]) + g;
    memo[i][2] = Math.min(memo[i - 1][0], memo[i - 1][1]) + b;
  }

  return Math.min(memo[N][2], Math.min(memo[N][0], memo[N][1])) + "";
};

export const examples = [
  {
    inputs: `3
    26 40 83
    49 60 57
    13 89 99`,
    answer: `96`,
  },
];

/**
 * 이진트리형 메모이제이션
 * @param {string[]} lines
 */
export const solution = (lines) => {
  const n = +lines.shift();
  for (let i = 0; i < n; ++i) lines[i] = lines[i].split(" ").map(Number);

  for (let i = n - 1; i >= 1; --i) {
    for (let j = 0; j < i; ++j) {
      lines[i - 1][j] += Math.max(lines[i][j], lines[i][j + 1]);
    }
  }

  return lines[0][0] + "";
};

export const examples = [
  {
    inputs: `5
    7
    3 8
    8 1 0
    2 7 4 4
    4 5 2 6 5`,
    answer: `30`,
  },
];

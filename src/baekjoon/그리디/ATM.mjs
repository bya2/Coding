/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  let indi = 0;
  return (
    lines[1]
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b)
      .reduce((acc, n) => ((indi += n), acc + indi), 0) + ""
  );
};

export const ok = (inputs = [""]) => {
  let prevAcc = 0;
  return (
    inputs[1]
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b)
      .reduce((acc, n, i) => {
        const result = acc + prevAcc + n;
        prevAcc += n;
        return result;
      }, 0) + ""
  );
};

export const examples = [
  {
    inputs: `5
    3 1 4 3 2`,
    answer: `32`,
  },
];

// 1 = 1
// 1 + 2 = 3
// 1 + 2 + 3 = 6
// 1 + 2 + 3 + 3 = 9
// 1 + 2 + 3 + 3 + 4 = 13

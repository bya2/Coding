/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  let n = +lines[0];
  return n * --n + "";
};

export const examples = [
  {
    inputs: `1`,
    answer: `0`,
  },
  {
    inputs: `2`,
    answer: `2`,
  },
  {
    inputs: `5`,
    answer: `20`,
  },
];

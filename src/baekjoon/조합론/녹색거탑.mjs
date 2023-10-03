/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  const n = +lines[0];
  return 2 ** n;
};

export const examples = [
  {
    inputs: `2`,
    answer: `4`,
  },
];

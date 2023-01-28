/**
 * @param {string[]} inputs
 */
export const solution = (inputs) => {
  inputs = inputs[1].split(" ").map(Number);
  return Math.max(...inputs) * Math.min(...inputs) + "";
};

export const examples = [
  {
    inputs: `2
    4 2`,
    answer: `8`,
  },
  {
    inputs: `14
    14 26456 2 28 13228 3307 7 23149 8 6614 46298 56 4 92596`,
    answer: `185192`,
  },
];

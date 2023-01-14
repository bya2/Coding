/**
 * @param {string[]} inputs
 */
export const solution = (inputs) => {
  return `${[...inputs[0]]
    .map(Number)
    .sort((a, b) => b - a)
    .join("")}`;
};

export const examples = [
  {
    inputs: `2143`,
    answer: `4321`,
  },
];

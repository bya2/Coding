/**
 * @param {string[]} inputs
 */
export const solution = (inputs) => {
  inputs.pop();
  return inputs
    .map((input) => input.split(" ").map(Number))
    .map(([num1, num2]) => {
      if (num2 % num1 === 0) return "factor";
      if (num1 % num2 === 0) return "multiple";
      return "neither";
    })
    .join("\n");
};

export const examples = [
  {
    inputs: `8 16
    32 4
    17 5
    0 0`,
    answer: `factor
    multiple
    neither`,
  },
];

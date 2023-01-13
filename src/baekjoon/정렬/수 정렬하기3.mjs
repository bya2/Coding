/**
 * @param {string[]} inputs
 */
export const solution = (inputs) => {
  // 1:수의 개수
  // 2~: 수
  return `${inputs
    .slice(1)
    .map(Number)
    .sort((a, b) => a - b)
    .join("\n")}`;
};

export const examples = [
  {
    inputs: `10
    5
    2
    3
    1
    4
    2
    3
    5
    1
    7`,
    answer: `1
    1
    2
    2
    3
    3
    4
    5
    5
    7`,
  },
];

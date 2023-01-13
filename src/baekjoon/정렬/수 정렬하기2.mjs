/**
 * @param {string[]} inputs
 */
export const solution = (inputs) => {
  // 1줄: 수의 개수
  // 2줄~: 수
  const [, ...arr] = inputs;
  return `${arr.sort((a, b) => a - b).join("\n")}`;
};

export const examples = [
  {
    inputs: `5
    5
    4
    3
    2
    1`,
    answer: `1
    2
    3
    4
    5`,
  },
];

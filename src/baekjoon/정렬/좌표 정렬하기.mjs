/**
 * @param {string[]} inputs
 */
export const solution = (inputs) => {
  // INPUTS
  // 1: 점의 개수
  // 2~: i번점의 위치 xi, yi
  inputs.shift();
  return inputs
    .map((s) => s.split(" ").map(Number))
    .sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]))
    .map((s) => s.join(" "))
    .join("\n");
};

export const examples = [
  {
    inputs: `5
    3 4
    1 1
    1 -1
    2 2
    3 3`,
    answer: `1 -1
    1 1
    2 2
    3 3
    3 4`,
  },
];

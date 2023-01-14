/**
 * @param {string[]} inputs
 */
export const solution = (inputs) => {
  // INPUTS
  // 1: 점의 개수
  // 2: i번점의 위치 xi, yi
  inputs.shift();
  return inputs
    .map((s) => s.split(" ").map(Number))
    .sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]))
    .map((s) => s.join(" "))
    .join("\n");
};

/**
 * @param {string[]} inputs
 */
export const solution = (inputs) => {
  inputs.shift();
  const stack = [];
  for (const n of inputs) {
    n === "0" ? stack.pop() : stack.push(+n);
  }
  return stack.reduce((a, b) => a + b, 0) + "";
};

export const examples = [
  {
    inputs: `4
  3
  0
  4
  0`,
    answer: `0`,
  },
  {
    inputs: `10
1
3
5
4
0
0
7
0
0
6`,
    answer: `7`,
  },
];

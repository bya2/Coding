/**
 * @param {string[]} inputs
 */
export const solution = (inputs) => {
  function bridgeCount(n, m) {
    let result = 1;
    for (let i = 0; i < n; i++) {
      result = ((result * (m - i)) / (i + 1)) % 10007;
    }
    return result;
  }

  inputs.shift();
  return inputs
    .map((input) => {
      const [n, m] = input.split(" ").map(Number);
      // const marked = new Map();

      // for (let i = 0; i < n; ++i) {
      //   for (let j = i; j < m; ++j) {}
      // }
      return bridgeCount(n, m);
    })
    .join("\n");
};

export const examples = [
  {
    inputs: `3
    2 2
    1 5
    13 29`,
    answer: `1
    5
    67863915`,
  },
];

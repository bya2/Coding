/**
 * @param {string[]} inputs
 */
export const solution = (inputs) => {
  const s = inputs[0];
  const map = new Map();
  for (let i = 0, len = s.length; i < len; ++i) {
    for (let j = i + 1; j <= len; ++j) {
      map.set(s.substring(i, j), true);
    }
  }
  return map.size + "";
};

export const examples = [
  {
    inputs: `ababc`,
    answer: `12`,
  },
];

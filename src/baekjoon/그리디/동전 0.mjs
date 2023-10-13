/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  let [n, k] = lines[0].split(" ").map(Number);
  let count = 0;

  for (let i = n; i >= 1 && k > 0; --i) {
    const v = +lines[i];
    if (v > k) continue;
    count += (k / v) >> 0;
    k %= v;
  }

  return count + "";
};

export const ok = (inputs = [""]) => {
  let [_, k] = inputs[0].split(" ").map(Number);
  let count = 0;
  for (let i = inputs.length - 1; i > 0 && k !== 0; --i) {
    const input = +inputs[i];
    if (k >= input) {
      count += Math.floor(k / input);
      k %= input;
    }
  }
  return count + "";
};

export const examples = [
  {
    inputs: `10 4200
    1
    5
    10
    50
    100
    500
    1000
    5000
    10000
    50000`,
    answer: `6`,
  },
  {
    inputs: `10 4790
    1
    5
    10
    50
    100
    500
    1000
    5000
    10000
    50000`,
    answer: `12`,
  },
];

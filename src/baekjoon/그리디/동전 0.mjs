export const solution = (inputs = [""]) => {
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

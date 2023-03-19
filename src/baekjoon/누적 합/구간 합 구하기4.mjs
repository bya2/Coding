export const solution = (inputs = [""]) => {
  inputs.shift();
  const nums = inputs.shift().split(" ").map(Number);
  const accs = [0];
  for (let i = 0; i < nums.length; ++i) accs.push(accs[i] + nums[i]);
  accs.shift();
  return inputs
    .map((input) => {
      const [i, j] = input.split(" ").map((c) => +c - 1);
      if (i === 0) return accs[j];
      return accs[j] - accs[i - 1];
    })
    .join("\n");
};

export const examples = [
  {
    inputs: `5 3
    5 4 3 2 1
    1 3
    2 4
    5 5`,
    answer: `12
    9
    1`,
  },
];

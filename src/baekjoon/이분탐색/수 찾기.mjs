export const solution = (inputs = [""]) => {
  const map = inputs[1].split(" ").reduce((map, t) => map.set(t, 1), new Map());
  return inputs[3]
    .split(" ")
    .map((n) => map.get(n) || 0)
    .join("\n");
};

export const examples = [
  {
    inputs: `5
    4 1 5 2 3
    5
    1 3 7 9 5`,
    answer: `1
    1
    0
    0
    1`,
  },
];

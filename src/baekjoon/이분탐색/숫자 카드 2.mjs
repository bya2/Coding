export const solution = (lines) => {
  const dict = lines[1]
    .split(" ")
    .reduce((map, t) => map.set(t, (map.get(t) || 0) + 1), new Map());

  return lines[3]
    .split(" ")
    .map((n) => dict.get(n) || 0)
    .join(" ");
};

export const examples = [
  {
    inputs: `10
    6 3 2 10 10 10 -10 -10 7 3
    8
    10 9 -5 2 3 4 5 -10`,
    answer: `3 0 0 1 2 0 0 2`,
  },
];

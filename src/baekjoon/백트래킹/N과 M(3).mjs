import { combine3 } from "./logic.mjs";

Object.defineProperty(Array.prototype, "combine", {
  value: combine3,
});

export const solution = (inputs = [""]) => {
  const [n, m] = inputs[0].split(" ").map(Number);
  const arr = Array.from({ length: n + 1 }, (_, i) => i);
  arr.shift();
  return arr.combine(m).join("\n");
};

export const examples = [
  {
    inputs: `3 1`,
    answer: `1
    2
    3`,
  },
  {
    inputs: `3 3`,
    answer: `1 1 1
    1 1 2
    1 1 3
    1 2 1
    1 2 2
    1 2 3
    1 3 1
    1 3 2
    1 3 3
    2 1 1
    2 1 2
    2 1 3
    2 2 1
    2 2 2
    2 2 3
    2 3 1
    2 3 2
    2 3 3
    3 1 1
    3 1 2
    3 1 3
    3 2 1
    3 2 2
    3 2 3
    3 3 1
    3 3 2
    3 3 3`,
  },
];

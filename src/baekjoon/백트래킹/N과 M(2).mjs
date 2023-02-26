import { combine2 } from "./logic.mjs";

Object.defineProperty(Array.prototype, "combine", {
  value: combine2,
});

export const solution = (inputs = [""]) => {
  const [n, m] = inputs[0].split(" ").map(Number);
  const arr = Array.from({ length: n + 1 }, (_, i) => i);
  arr.shift();
  return arr.combine(m).join("\n");
};

export const examples = [
  {
    inputs: `4 4`,
    answer: `1 2 3 4`,
  },
];

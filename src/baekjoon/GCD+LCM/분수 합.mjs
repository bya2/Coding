import { gcdOf } from "./Euclidean.mjs";

/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  lines = lines.map((line) => line.split(" ").map(Number));

  const n = lines[0][0] * lines[1][1] + lines[0][1] * lines[1][0];
  const m = lines[0][1] * lines[1][1];

  const gcd = gcdOf(n, m);

  return `${n / gcd} ${m / gcd}`;
};

export const examples = [
  {
    inputs: `2 7
    3 5`,
    answer: `31 35`,
  },
];

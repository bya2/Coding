import { SieveOfEratosthenes } from "./Prime.mjs";
import { getPrimesInRange } from "./logic.mjs";

/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  const [n, m] = lines[0].split(" ").map(Number);
  const e = new SieveOfEratosthenes(m);
  return e.getPrimesGE(n).join("\n");
};

export const solution2 = (lines) => {
  return getPrimesInRange(...lines[0].split(" ").map(Number)).join("\n");
};

export const examples = [
  {
    inputs: `3 16`,
    answer: `3
    5
    7
    11
    13`,
  },
];

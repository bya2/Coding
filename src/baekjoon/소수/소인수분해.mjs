import { SieveOfEratosthenes } from "./Prime.mjs";

/**
 * @param {string[]} inputs
 */
export const solution = (lines) => {
  const n = +lines[0];
  const e = new SieveOfEratosthenes(n);
  const arr = e.getFactorizedPrimes(n);
  return arr.join("\n");
};

export const examples = [
  {
    inputs: `72`,
    answer: `2
    2
    2
    3
    3`,
  },
  {
    inputs: `6`,
    answer: `2
    3`,
  },
  {
    inputs: `9991`,
    answer: `97
    103`,
  },
];

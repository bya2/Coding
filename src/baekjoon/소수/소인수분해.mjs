import { factorize } from "./logic.mjs";

/**
 * @param {string[]} inputs
 */
export const solution = (lines) => {
  const n = +lines[0];
  const primes = factorize(n);
  return primes.join("\n");
};

export const examples = [
  // {
  //   inputs: `72`,
  //   answer: `2
  //   2
  //   2
  //   3
  //   3`,
  // },
  // {
  //   inputs: `6`,
  //   answer: `2
  //   3`,
  // },
  {
    inputs: `9991`,
    answer: `97
    103`,
  },
];

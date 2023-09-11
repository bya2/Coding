import { get_primes_in_range } from "./logic.mjs";

/**
 * @param {string[]} inputs
 */
export const solution = (lines) => {
  const primes = get_primes_in_range(...lines.map(Number));
  return primes.length
    ? `${primes.reduce((a, b) => a + b, 0)}\n${primes[0]}`
    : -1;
};

export const examples = [
  {
    inputs: `60
    100`,
    answer: `620
    61`,
  },
  {
    inputs: `1
    2`,
    answer: `2
    2`,
  },
];

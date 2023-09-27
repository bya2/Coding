import SieveOfEratosthenes from "./SieveOfEratosthenes.mjs";

/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  lines.pop();
  return lines
    .map((n) => {
      n = +n;
      const e = new SieveOfEratosthenes(2 * n);
      return e.countPrimes(n + 1);
    })
    .join("\n");
};

export const examples = [
  {
    inputs: `1
    10
    13
    100
    1000
    10000
    100000
    0`,
    answer: `1
    4
    3
    21
    135
    1033
    8392`,
  },
];

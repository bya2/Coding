import { is_prime_number } from "./logic.mjs";

/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  return (
    lines[1]
      .split(" ")
      .map(Number)
      .reduce((count, n) => {
        if (is_prime_number(n)) count++;
        return count;
      }, 0) + ""
  );
};

export const examples = [
  {
    inputs: `4
    1 2 3 5 7 11 10`,
    answer: `5`,
  },
];

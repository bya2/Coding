import { getBinomialCoefficient } from "./logic.mjs";

/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  return getBinomialCoefficient(...lines[0].split(" ").map(Number)) + "";
};

export const examples = [
  {
    inputs: ``,
    answer: ``,
  },
];

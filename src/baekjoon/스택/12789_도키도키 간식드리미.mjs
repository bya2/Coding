import { canBeSorted } from "./logic.mjs";

/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  return canBeSorted(lines[1].split(" ").map(Number)) ? "Nice" : "Sad";
};

export const examples = [
  {
    inputs: `5
    5 4 1 3 2`,
    answer: `Nice`,
  },
  {
    inputs: `3
    2 1 3`,
    answer: `Nice`,
  },
  {
    inputs: `5
    3 2 1 5 4`,
    answer: `Nice`,
  },
  {
    inputs: `5
    1 3 4 5 2`,
    answer: `Sad`,
  },
];

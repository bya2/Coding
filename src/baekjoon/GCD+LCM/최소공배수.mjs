import { lcmOf } from "./Euclidean.mjs";

/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  return lcmOf(...lines[0].split(" ").map(Number)) + "";
};

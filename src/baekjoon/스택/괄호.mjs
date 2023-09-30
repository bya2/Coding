import { isVPS } from "./logic.mjs";

/**
 * @param {string[]} inputs
 */
export const solution = (inputs) => {
  inputs.shift();
  return inputs
    .map((input) => (isVPS.call(input) ? "YES" : "NO"))
    .join("\n");
};

export const examples = [
  {
    inputs: `6
    (())())
    (((()())()
    (()())((()))
    ((()()(()))(((())))()
    ()()()()(()()())()
    (()((())()(`,
    answer: `NO
    NO
    YES
    NO
    YES
    NO`,
  },
];

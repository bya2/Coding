import { nQueens2 } from "./logic.mjs";

export const solution = (inputs = [""]) => {
  return nQueens2(+inputs[0]) + "";
};

export const examples = [
  {
    inputs: `8`,
    answer: `92`,
  },
];

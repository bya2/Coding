/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  const N = +lines.shift();

  const ENTER = "ENTER";
  let dict = {};
  let count = 0;
  for (let p of lines) {
    if (p === ENTER) dict = {};
    else if (!dict[p]) {
      dict[p] = 1;
      count++;
    }
  }

  return count + "";
};

export const examples = [
  {
    inputs: `9
    ENTER
    pjshwa
    chansol
    chogahui05
    lms0806
    pichulia
    r4pidstart
    swoon
    tony9402`,
    answer: `8`,
  },
];

export const divisor = {
  getNth: (val, k) => {
    if (k === 1) return 1;

    let count = 1;
    for (let n = 2, to = val / 2; n <= to; ++n) {
      if (val % n === 0) {
        ++count;
        if (count === k) return n;
      }
    }
    if (++count === k) return val;

    return 0;
  },
};

export const solution = (inputs) => {
  return divisor.getNth(...inputs[0].split(" ").map(Number)) + "";
};

export const examples = [
  {
    inputs: `6 3`,
    answer: `3`,
  },
  {
    inputs: `2735 1`,
    answer: `1`,
  },
  {
    inputs: `25 4`,
    answer: `0`,
  },
  {
    inputs: `3 2`,
    answer: `3`,
  },
  {
    inputs: `15 3`,
    answer: `3`,
  },
];

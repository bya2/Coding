/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  const seq = lines[1].split(" ").map(Number);

  let maximum = seq[0];
  let acc = seq[0];
  for (let i = 1; i < seq.length; ++i) {
    acc = acc < 0 ? seq[i] : acc + seq[i];
    maximum = Math.max(maximum, acc);
  }

  return maximum + "";
};

export const examples = [
  {
    inputs: `10
    10 -4 3 1 5 6 -35 12 21 -1`,
    answer: `33`,
  },
  {
    inputs: `10
    2 1 -4 3 4 -4 6 5 -5 1`,
    answer: `14`,
  },
  {
    inputs: `5
    -1 -2 -3 -4 -5`,
    answer: `-1`,
  },
];

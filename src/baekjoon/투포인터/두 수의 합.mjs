/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  const inputs = lines[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const x = +lines[2];

  let count = 0;
  let i = 0;
  let j = inputs.length - 1;

  while (i < j) {
    const c = inputs[i] + inputs[j];

    if (c === x) {
      count++;
      i++;
      j--;
    } else if (c < x) {
      i++;
    } else {
      j--;
    }
  }

  return count + "";
};

export const examples = [
  {
    inputs: `9
    5 12 7 10 9 1 2 3 11
    13`,
    answer: `3`,
  },
];

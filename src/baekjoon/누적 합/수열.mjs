if (!String.prototype.toNumbers) {
  Object.defineProperties(String.prototype, {
    toNumbers: {
      value(seperator) {
        return this.split(seperator).map(Number);
      },
    },
  });
}

/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  const [_, k] = lines[0].toNumbers(" ");
  const seq = lines[1].toNumbers(" ");

  const sum = (a, b) => {
    let acc = 0;
    for (let i = a; i < b; ++i) acc += seq[i];
    return acc;
  };

  let v = sum(0, k);
  let maximum = v;
  let n = v;
  for (let i = 0; i < seq.length - k; ++i) {
    n += seq[i + k] - seq[i];
    maximum = Math.max(maximum, n);
  }

  return maximum + "";
};

export const examples = [
  {
    inputs: `10 2
    3 -2 -4 -9 0 3 7 13 8 -3`,
    answer: `21`,
  },
  {
    inputs: `10 5
    3 -2 -4 -9 0 3 7 13 8 -3`,
    answer: `31`,
  },
  {
    inputs: `6 3
    1 1 1 -1 -1 -1`,
    answer: `3`,
  },
];

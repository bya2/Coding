function combine(length) {
  const combinations = [];

  const recur = (acc, index) => {
    if (acc.length === length) {
      combinations.push(acc.join(" "));
      return;
    }

    for (let i = index, len = this.length; i < len; ++i) {
      recur([...acc, this[i]], i + 1);
    }
  };

  recur([], 0);

  return combinations;
}

/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  const [[n], ...inputs] = lines.map((line) => line.split(" ").map(Number));
  combine.call(inputs, n / 2);
};

export const examples = [
  {
    inputs: `4
    0 1 2 3
    4 0 5 6
    7 1 0 2
    3 4 5 0`,
    answer: `0`,
  },
];

Object.defineProperty(Array.prototype, "binarySearch", {
  value(value) {
    let minimum = 0;
    let maximum = this[this.length - 1];
    let result = Number.MIN_SAFE_INTEGER;

    while (minimum <= maximum) {
      const median = Math.floor((minimum + maximum) / 2);
      const sum = this.reduce(
        (acc, n) => acc + (n > median ? n - median : 0),
        0
      );
      if (sum >= value) {
        if (result < median) result = median;
        minimum = median + 1;
      } else {
        maximum = median - 1;
      }
    }

    return result;
  },
});

export const solution = (inputs = [""]) => {
  const m = +inputs[0].split(" ")[1];
  const heights = inputs[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  return heights.binarySearch(m) + "";
};

export const examples = [
  {
    inputs: `4 7
    20 15 10 17`,
    answer: `15`,
  },
  {
    inputs: `5 20
    4 42 40 26 46`,
    answer: `36`,
  },
];

Object.defineProperties(Array.prototype, {
  countDistance: {
    value(median) {
      let count = 1;
      for (let i = 0, curr = this[0]; i < this.length; ++i) {
        if (this[i] - curr >= median) {
          curr = this[i];
          count++;
        }
      }
      return count;
    },
  },
  binarySearch: {
    value(value) {
      let minimum = 0;
      let maximum = this[this.length - 1];

      while (minimum <= maximum) {
        const median = Math.floor((minimum + maximum) / 2);
        if (this.countDistance(median) >= value) minimum = median + 1;
        else maximum = median - 1;
      }

      return maximum;
    },
  },
});

export const solution = (inputs = [""]) => {
  const m = +inputs.shift().split(" ")[1];
  return (
    inputs
      .map(Number)
      .sort((a, b) => a - b)
      .binarySearch(m) + ""
  );
};

export const examples = [
  {
    inputs: `5 3
    1
    2
    8
    4
    9`,
    answer: `3`,
  },
];

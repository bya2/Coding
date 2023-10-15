Object.defineProperties(Array.prototype, {
  binarySearch: {
    /**
     * @param {(median: number, this: number[]) => number} cb 각 요소에 대한 처리 및 결산
     * @param {number} least 결산된 값의 최저값
     */
    value(cb, least) {
      this.sort((a, b) => a - b);

      let minimum = this[0];
      let maximum = this.at(-1);

      while (minimum <= maximum) {
        let median = (minimum + maximum) >> 1;
        if (cb(median, this) >= least) minimum = ++median;
        else maximum = --median;
      }

      return maximum;
    },
  },
});

/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  const M = +lines[0].split(" ")[1];
  const numbers = lines[1].split(" ").map(Number);
  return (
    numbers.binarySearch(
      (median, arr) =>
        arr.reduce((acc, h) => acc + (h > median ? h - median : 0), 0),
      M
    ) + ""
  );
};

// Object.defineProperty(Array.prototype, "binarySearch", {
//   value(value) {
//     let minimum = 0;
//     let maximum = this[this.length - 1];
//     let result = Number.MIN_SAFE_INTEGER;

//     while (minimum <= maximum) {
//       const median = Math.floor((minimum + maximum) / 2);
//       const sum = this.reduce(
//         (acc, n) => acc + (n > median ? n - median : 0),
//         0
//       );
//       if (sum >= value) {
//         if (result < median) result = median;
//         minimum = median + 1;
//       } else {
//         maximum = median - 1;
//       }
//     }

//     return result;
//   },
// });

// export const other = (inputs = [""]) => {
//   const m = +inputs[0].split(" ")[1];
//   const heights = inputs[1]
//     .split(" ")
//     .map(Number)
//     .sort((a, b) => a - b);
//   return heights.binarySearch(m) + "";
// };

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

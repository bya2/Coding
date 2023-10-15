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
  const [_, C] = lines.shift().split(" ").map(Number);

  const countDistance = (mid, arr) => {
    let count = 1;
    let currPos = arr[0];

    for (let p of arr) {
      if (p - currPos >= mid) {
        currPos = p;
        ++count;
      }
    }

    return count;
  };

  return lines.map(Number).binarySearch(countDistance, C) + "";
};

// Object.defineProperties(Array.prototype, {
//   countDistance: {
//     value(median) {
//       let count = 1;
//       for (let i = 0, curr = this[0]; i < this.length; ++i) {
//         if (this[i] - curr >= median) {
//           curr = this[i];
//           count++;
//         }
//       }
//       return count;
//     },
//   },
//   binarySearch: {
//     value(value) {
//       let minimum = 0;
//       let maximum = this[this.length - 1];

//       while (minimum <= maximum) {
//         const median = Math.floor((minimum + maximum) / 2);
//         if (this.countDistance(median) >= value) minimum = median + 1;
//         else maximum = median - 1;
//       }

//       return maximum;
//     },
//   },
// });

// export const other = (inputs = [""]) => {
//   const m = +inputs.shift().split(" ")[1];
//   return (
//     inputs
//       .map(Number)
//       .sort((a, b) => a - b)
//       .binarySearch(m) + ""
//   );
// };

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

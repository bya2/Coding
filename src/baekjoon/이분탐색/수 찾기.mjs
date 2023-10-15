/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  Object.defineProperties(String.prototype, {
    toNumbers: {
      value() {
        return this.split(" ").map(Number);
      },
    },
  });

  Object.defineProperties(Array.prototype, {
    binarySearch__indexOf: {
      value(v) {
        let si = 0;
        let ei = this.length - 1;

        while (si <= ei) {
          let mi = ((si + ei) / 2) >> 0;
          if (this[mi] === v) return mi;
          if (this[mi] < v) si = ++mi;
          else ei = --mi;
        }

        return -1;
      },
    },
  });

  const A = lines[1].toNumbers().sort((a, b) => a - b);
  const inputs = lines[3].toNumbers();

  return inputs
    .map((n) => (A.binarySearch__indexOf(n) === -1 ? 0 : 1))
    .join("\n");
};

// Object.defineProperty(Array.prototype, "binarySearch", {
//   value(value) {
//     let startIndex = 0;
//     let endIndex = this.length - 1;

//     while (startIndex <= endIndex) {
//       let middleIndex = Math.floor((startIndex + endIndex) / 2);

//       if (this[middleIndex] === value) {
//         return middleIndex;
//       }

//       if (value < this[middleIndex]) {
//         endIndex = middleIndex - 1;
//       } else {
//         startIndex = middleIndex + 1;
//       }
//     }

//     return -1;
//   },
// });

// export const other = (inputs = [""]) => {
//   const arr = inputs[1]
//     .split(" ")
//     .map(Number)
//     .sort((a, b) => a - b);
//   return inputs[3]
//     .split(" ")
//     .map((n) => (arr.binarySearch(+n) === -1 ? 0 : 1))
//     .join("\n");
// };

// export const solution = (inputs = [""]) => {
//   const map = inputs[1].split(" ").reduce((map, t) => map.set(t, 1), new Map());
//   return inputs[3]
//     .split(" ")
//     .map((n) => map.get(n) || 0)
//     .join("\n");
// };

export const examples = [
  {
    inputs: `5
    4 1 5 2 3
    5
    1 3 7 9 5`,
    answer: `1
    1
    0
    0
    1`,
  },
];

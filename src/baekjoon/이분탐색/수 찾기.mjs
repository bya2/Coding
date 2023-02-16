Object.defineProperty(Array.prototype, "binarySearch", {
  value(value) {
    let startIndex = 0;
    let endIndex = this.length - 1;

    while (startIndex <= endIndex) {
      let middleIndex = Math.floor((startIndex + endIndex) / 2);

      if (this[middleIndex] === value) {
        return middleIndex;
      }

      if (value < this[middleIndex]) {
        endIndex = middleIndex - 1;
      } else {
        startIndex = middleIndex + 1;
      }
    }

    return -1;
  },
});

export const solution = (inputs = [""]) => {
  const arr = inputs[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  return inputs[3]
    .split(" ")
    .map((n) => (arr.binarySearch(+n) === -1 ? 0 : 1))
    .join("\n");
};

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

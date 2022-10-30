/**
 * @param {number[]} elements
 */
export const solution = (elements) => {
  const arr = [...elements, ...elements];

  const combs = new Set();

  for (let s = 1, len = elements.length; s <= len; ++s) {
    for (let i = 0; i < len; ++i) {
      let sum = 0;
      for (let j = i, len = s + i; j < len; ++j) sum += arr[j];
      combs.add(sum);
    }
  }

  return combs.size;
};

// const combine = (arr, length) => {
//   const combinations = new Set();
//   const visited = arr.reduce((obj, t) => ((obj[t] = false), obj), {});

//   const dfs = (acc, dict) => {
//     if (acc.length === length) {
//       combinations.add(acc.reduce((a, b) => a + b));
//       return;
//     }

//     for (let n of arr) {
//       if (!dict)
//     }
//   };

//   return combinations.size;
// };

export const examples__arr = [
  {
    elements: [7, 9, 1, 1, 4],
    answer: 18,
  },
];

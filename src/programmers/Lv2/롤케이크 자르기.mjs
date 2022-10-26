/**
 * @param {number[]} topping
 */
export function solution(topping) {
  const originalDict = topping.reduce((obj, t) => ((obj[t] = obj[t] ? ++obj[t] : 1), obj), {});
  const sliceDict = {};
  let originSize = Object.keys(originalDict).length,
    sliceSize = 0;
  let count = 0;

  for (let i = 0, len = topping.length; i < len; ++i) {
    const t = topping[i];

    if (!sliceDict[t]) {
      sliceDict[t] = 1;
      sliceSize++;
    }

    originalDict[t]--;
    if (originalDict[t] === 0) {
      originSize--;
    }

    if (originSize === sliceSize) {
      count++;
    }
  }
  
  return count;
}

export const examples__arr = [
  {
    topping: [1, 2, 1, 3, 1, 4, 1, 2],
    answer: 2,
  },
  {
    topping: [1, 2, 3, 1, 4],
    answer: 0,
  },
];

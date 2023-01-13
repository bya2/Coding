/**
 * @param {number[]} arr
 */
export const selectionSort = (arr) => {
  for (let i = 0, len = arr.length; i < len; ++i) {
    let minI = i;

    for (let j = i + 1; j < len; ++j) {
      if (arr[minI] > arr[j]) {
        minI = j;
      }
    }

    if (minI !== i) {
      [arr[i], arr[minI]] = [arr[minI], arr[i]];
    }
  }

  return arr;
};

/**
 * @param {string[]} inputs
 */
export const solution = (inputs) => {
  const avg =
    inputs.reduce((acc, a, i) => {
      let k = i;
      for (let j = i + 1, len = inputs.length; j < len; ++j) {
        if (+inputs[k] > +inputs[j]) {
          k = j;
        }
      }
      if (k !== i) {
        [inputs[i], inputs[k]] = [inputs[k], inputs[i]];
      }

      return acc + +inputs[i];
    }, 0) / inputs.length;

  return `${avg}\n${inputs[(inputs.length / 2) >> 0]}`;
};

export const examples = [
  {
    inputs: `10
  40
  30
  60
  30`,
    answer: `34
  30`,
  },
];

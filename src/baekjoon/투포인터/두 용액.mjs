/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  let n = +lines[0];
  let inputs = lines[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  let i = 0;
  let j = n - 1;
  let sum = 0;
  let maximum = Number.MAX_SAFE_INTEGER;
  let pair = new Array(2).fill(0);
  while (i !== j) {
    sum = inputs[i] + inputs[j];
    if (Math.abs(sum) < maximum) {
      maximum = Math.abs(sum);
      pair[0] = inputs[i];
      pair[1] = inputs[j];
    }
    if (sum === 0) {
      break;
    } else if (sum > 0) {
      j--;
    } else if (sum < 0) {
      i++;
    }
  }

  return pair.join(" ");
};

export const examples = [
  {
    inputs: `5
    -2 4 -99 -1 98`,
    answer: `-99 98`,
  },
];

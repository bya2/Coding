/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  const m = +lines[0].split(" ")[1];
  const arr = lines[1].split(" ").map(Number);

  const accBy = [0];
  for (let i = 0; i < arr.length; ++i) accBy.push(accBy[i] + arr[i]);

  let count = 0;
  for (let i = 1; i <= arr.length; ++i) {
    if (accBy[i] < m) continue;
    for (let j = 0; j <= i; ++j) {
      const sum = accBy[i] - accBy[j];
      if (sum < m) break;
      if (sum % m === 0) ++count;
    }
  }

  return count + "";
};

export const examples = [
  {
    inputs: `5 3
    1 2 3 1 2`,
    answer: `7`,
  },
];

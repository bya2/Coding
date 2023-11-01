/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  const [_, inputs] = lines.map(Number);
  let tmp = inputs[0];

  const recur = (arr, li, ri) => {
    if (li === ri) return arr[li];

    const mi = (li + ri) >> 1;
    const highH = Math.max(recur(arr, li, mi), recur(arr, mi + 1, ri));

    let mli = mi;
    let mri = mi + 1;
    const area = Math.max(highH, Math.min(arr[mli], arr[mri]));

    while (mli > li || mri < ri) {
      if (mri < ri && )
    }
  };
};

export const examples = [
  {
    inputs: `7
    2
    1
    4
    5
    1
    3
    3`,
    answer: `8`,
  },
];

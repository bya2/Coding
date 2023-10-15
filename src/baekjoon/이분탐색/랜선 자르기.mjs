/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  const n = +lines.shift().split(" ")[1];
  const inputs = lines.map(Number);
  let minimum = 1;
  let maximum = Math.max(...inputs);

  while (minimum <= maximum) {
    const middle = ((minimum + maximum) / 2) >> 0;
    const subs = inputs.map((n) => (n / middle) >> 0).reduce((a, b) => a + b);
    if (subs >= n) minimum = middle + 1;
    else maximum = middle - 1;
  }

  return maximum;
};

export const other = (inputs = [""]) => {
  const [_, n] = inputs.shift().split(" ").map(Number);
  inputs = inputs.map(Number);
  let minimum = 1;
  let maximum = Math.max(...inputs);

  while (minimum <= maximum) {
    const middle = ~~((minimum + maximum) / 2);
    const pieces = inputs.map((e) => ~~(e / middle)).reduce((a, b) => a + b);
    if (pieces >= n) minimum = middle + 1;
    else maximum = middle - 1;
  }

  return maximum + "";
};

export const examples = [
  {
    inputs: `4 11
    802
    743
    457
    539`,
    answer: `200`,
  },
];

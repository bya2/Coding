const memoizedSeq = [
  0,
  1,
  1,
  1,
  2,
  2,
  3,
  4,
  5,
  7,
  9,
  ...Array.from({ length: 91 }, () => 0),
];

/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  const getFibonacci = (n) => {
    if (memoizedSeq[n]) return memoizedSeq[n];
    else return (memoizedSeq[n] = getFibonacci(n - 1) + getFibonacci(n - 5));
  };

  lines.shift();
  return lines.map((v) => getFibonacci(+v)).join("\n");
};

export const examples = [
  {
    inputs: `2
    6
    12`,
    answer: `3
    16`,
  },
];

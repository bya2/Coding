export const solution = (targets = [[0, 0]]) => {
  targets.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
  console.log(targets);

  let count = 0;
  let cut = -1;
  for (const [s, e] of targets) {
    if (s >= cut) {
      count++;
      cut = e;
    }
  }

  return count;
};

export const examples__arr = [
  {
    targets: [
      [4, 5],
      [4, 8],
      [10, 14],
      [11, 13],
      [5, 12],
      [3, 7],
      [1, 4],
    ],
    answer: 3,
  },
];

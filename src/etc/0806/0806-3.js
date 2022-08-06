export const solution = (maps) => {
  const len_h = maps.length;
  const len_w = maps[0].length;
  let len_sum = 0;

  for (let i = 0; i < len_h; ++i) {
    for (let j = 0; j < len_w; ++j) {
      if (maps[i][j] === 1) {
        len_sum += 4;

        if (i !== len_h - 1 && maps[i + 1][j] === 1) {
          len_sum -= 2;
        }

        if (j !== len_w - 1 && maps[i][j + 1] === 1) {
          len_sum -= 2;
        }
      }
    }
  }

  return len_sum;
};

export const examples__arr = [
  {
    maps: [
      [0, 0, 1, 0, 0],
      [0, 1, 1, 0, 1],
      [0, 0, 1, 0, 1],
      [1, 1, 1, 0, 1],
    ],
    answer: 24,
  },
  {
    maps: [
      [1, 0, 1, 1],
      [0, 0, 1, 1],
      [1, 1, 0, 1],
      [1, 1, 0, 0],
    ],
    answer: 22,
  },
];

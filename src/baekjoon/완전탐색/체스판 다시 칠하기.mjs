/**
 * @param {string[]} inputs
 */
export const solution = (inputs) => {
  // INPUTS:
  // 1: ROWS, COLS
  // 2~: STATE(BLACK, WHITE)

  // OUTPUS:
  // - 다시 칠해야할 정사각형의 개수의 최솟값

  const [ROWS, COLS] = inputs.shift().split(" ").map(Number);
  inputs = inputs.map((input) => [...input]);

  const whiteBoard = [
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
  ];
  const blackBoard = [
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
  ];

  let result = 90;

  const check = (row, col) => {
    let black = 0;
    let white = 0;

    for (let i = row; i < row + 8; ++i) {
      for (let j = col; j < col + 8; ++j) {
        if (inputs[i][j] !== whiteBoard[i - row][j - col]) white++;
        if (inputs[i][j] !== blackBoard[i - row][j - col]) black++;
      }
    }

    const minimum = Math.min(black, white);
    if (minimum < result) {
      result = minimum;
    }
  };

  for (let i = 0; i <= ROWS - 8; ++i) {
    for (let j = 0; j <= COLS - 8; ++j) {
      check(i, j);
    }
  }

  return result + "";
};

export const examples = [
  {
    inputs: `8 8
    WBWBWBWB
    BWBWBWBW
    WBWBWBWB
    BWBBBWBW
    WBWBWBWB
    BWBWBWBW
    WBWBWBWB
    BWBWBWBW`,
    answer: `1`,
  },
  {
    inputs: `10 13
    BBBBBBBBWBWBW
    BBBBBBBBBWBWB
    BBBBBBBBWBWBW
    BBBBBBBBBWBWB
    BBBBBBBBWBWBW
    BBBBBBBBBWBWB
    BBBBBBBBWBWBW
    BBBBBBBBBWBWB
    WWWWWWWWWWBWB
    WWWWWWWWWWBWB`,
    answer: `12`,
  },
  {
    inputs: `8 8
    BWBWBWBW
    WBWBWBWB
    BWBWBWBW
    WBWBWBWB
    BWBWBWBW
    WBWBWBWB
    BWBWBWBW
    WBWBWBWB`,
    answer: `0`,
  },
  {
    inputs: `9 23
    BBBBBBBBBBBBBBBBBBBBBBB
    BBBBBBBBBBBBBBBBBBBBBBB
    BBBBBBBBBBBBBBBBBBBBBBB
    BBBBBBBBBBBBBBBBBBBBBBB
    BBBBBBBBBBBBBBBBBBBBBBB
    BBBBBBBBBBBBBBBBBBBBBBB
    BBBBBBBBBBBBBBBBBBBBBBB
    BBBBBBBBBBBBBBBBBBBBBBB
    BBBBBBBBBBBBBBBBBBBBBBW`,
    answer: `31`,
  },
  {
    inputs: `10 10
    BBBBBBBBBB
    BBWBWBWBWB
    BWBWBWBWBB
    BBWBWBWBWB
    BWBWBWBWBB
    BBWBWBWBWB
    BWBWBWBWBB
    BBWBWBWBWB
    BWBWBWBWBB
    BBBBBBBBBB`,
    answer: `0`,
  },
];

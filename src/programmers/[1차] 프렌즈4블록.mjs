export const solution = (h, w, arr = [""]) => {
  const board = arr.map((s) => s.split(""));

  while (true) {
    const founded = [];
    for (let i = 1; i < h; ++i) {
      for (let j = 1; j < w; ++j) {
        const b = board[i][j];
        if (b && b === board[i][j - 1] && b === board[i - 1][j] && b === board[i - 1][j - 1]) {
          founded.push([i, j]);
        }
      }
    }

    if (founded.length === 0) {
      console.log([].concat(...board));
      console.log(board);
      return [].concat(...board).filter((v) => !v).length;
    }

    for (const [row, col] of founded) {
      for (let i = 0; i <= 1; ++i) {
        for (let j = 0; j <= 1; ++j) {
          board[row - i][col - j] = null;
        }
      }
    }

    console.log(board);

    for (let row = h - 1; row > 0; --row) {
      if (!board[row].some((v) => !v)) continue;
      for (let col = 0; col < w; ++col) {
        for (let k = row - 1; k >= 0 && !board[row][col]; --k) {
          console.log(row, k, col, board[k][col]);
          if (board[k][col]) {
            board[row][col] = board[k][col];
            board[k][col] = null;
            break;
          }
        }
      }
    }
  }
};

export const fail_solution = (h = 1, w = 1, board = [""]) => {
  const sList = Array.from({ length: w }, () => -1);
  const eList = Array.from({ length: w }, () => -1);
  const nList = Array.from({ length: w }, () => h);

  for (let i = 0; i < h; ++i) {
    board[i] = board[i].split("");
  }

  let isSet = true;

  while (isSet) {
    isSet = setRangeOfEmptying(board, sList, eList);
    changeBlocks(board, sList, eList, nList);

    console.log(board);
    console.log(isSet);
  }

  return w * h - nList.reduce((a, b) => a + b, 0);
};

const setRangeOfEmptying = (board = [[""]], sList = [-1], eList = [-1]) => {
  const w = board[0].length - 1;
  const h = board.length - 1;
  const copyList = [...eList];
  let isSet = false;

  for (let col = 0; col < w; ++col) {
    const blockTop = copyList[col + 1] + 1;
    for (let row = blockTop; row < h; ++row) {
      const char = board[row][col];
      if (char === null) {
        continue;
      }
      if (char === board[row + 1][col] && char === board[row][col + 1] && char === board[row + 1][col + 1]) {
        if (!isSet) isSet = true;
        for (let i = 0; i <= 1; ++i) {
          if (sList[col + i] === -1) sList[col + i] = row;
          eList[col + i] = row + 1;
        }
      }
    }
  }

  return isSet;
};

const changeBlocks = (board = [[""]], sList = [-1], eList = [-1], nList = [-1]) => {
  const h = board.length;

  for (let col = 0, w = board[0].length; col < w; ++col) {
    if (sList[col] === -1 || eList[col] === -1) continue;

    const distance = eList[col] - sList[col] + 1;
    let count = 0;
    for (let row = sList[col]; row <= eList[col]; ++row) {
      board[row][col] = null;
      if (row >= distance) {
        [board[row - distance][col], board[row][col]] = [board[row][col], board[row - distance][col]];
        count++;
      }
    }
    nList[col] -= distance;
    eList[col] = h - nList[col] - 1;
    sList[col] = -1;
  }
};

export const examples__arr = [
  {
    m: 4,
    n: 5,
    board: ["CCBDE", "AAADE", "AAABF", "CCBBF"],
    answer: 14,
  },
  {
    m: 6,
    n: 6,
    board: ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"],
    answer: 15,
  },
];

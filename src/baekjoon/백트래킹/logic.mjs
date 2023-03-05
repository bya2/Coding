/**
 *
 * @param {*} length
 * @returns
 */
export function combine(length) {
  const combinations = [];

  const recur = (acc, marked) => {
    if (acc.length === length) {
      combinations.push(acc.join(" "));
      return;
    }

    for (const char of this) {
      if (!marked[char]) recur([...acc, char], { ...marked, [char]: true });
    }
  };

  recur(
    [],
    this.reduce((obj, t) => ((obj[t] = false), obj), {})
  );

  return combinations;
}

/**
 * 중복X
 * @param {*} length
 * @returns
 */
export function combine2(length) {
  const combinations = [];

  const recur = (acc, index) => {
    if (acc.length === length) {
      combinations.push(acc.join(" "));
      return;
    }

    for (let i = index, len = this.length; i < len; ++i) {
      recur([...acc, this[i]], i + 1);
    }
  };

  recur([], 0);

  return combinations;
}

export function combine3(length) {
  const combinations = [];

  const recur = (acc) => {
    if (acc.length === length) {
      combinations.push(acc.join(" "));
      return;
    }

    for (let i = 0, len = this.length; i < len; ++i) {
      recur([...acc, this[i]]);
    }
  };

  recur([]);

  return combinations;
}

/**
 * 순서O
 * @param {*} length
 * @returns
 */
export function combine4(length) {
  const combinations = [];

  const recur = (acc, index) => {
    if (acc.length === length) {
      combinations.push(acc.join(" "));
      return;
    }

    for (let i = index; i < this.length; ++i) {
      recur([...acc, this[i]], i);
    }
  };

  recur([], 0);

  return combinations;
}

export function nQueens(n) {
  const combinations = [];
  const board = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => 0)
  );

  const isValid = (row, col) => {
    for (let i = 0; i < row; ++i) if (board[i][col] === 1) return false;
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; --i, --j)
      if (board[i][j] === 1) return false;
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; --i, ++j)
      if (board[i][j] === 1) return false;
    return true;
  };

  const backtrack = (row) => {
    if (row === n) {
      combinations.push(board.map((row) => row.join("")));
      return;
    }

    for (let col = 0; col < n; ++col) {
      if (isValid(row, col)) {
        board[row][col] = 1;
        backtrack(row + 1);
        board[row][col] = 0;
      }
    }
  };

  backtrack(0);
  return combinations;
}

export function nQueens2(n) {
  let count = 0;
  const board = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => 0)
  );

  const isValid = (row, col) => {
    for (let i = 0; i < row; ++i) if (board[i][col] === 1) return false;
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; --i, --j)
      if (board[i][j] === 1) return false;
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; --i, ++j)
      if (board[i][j] === 1) return false;
    return true;
  };

  const backtrack = (row) => {
    if (row === n) {
      count++;
      return;
    }

    for (let col = 0; col < n; ++col) {
      if (isValid(row, col)) {
        board[row][col] = 1;
        backtrack(row + 1);
        board[row][col] = 0;
      }
    }
  };

  backtrack(0);
  return count;
}

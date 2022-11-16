/**
 * N-Queen
 * - 가로, 세로 길이가 'n인 정사각형으로된 체스판'
 * - 체스판 위의 'n개의 퀸'이 서로를 공격할 수 없도록 배치
 *
 * @param {number} n
 * @return 배치 방법의 경우의 수
 */
export const solution = (n) => {
  let cases = 0;

  const isValid = (arr, row) => {
    for (let i = 1; i < row; ++i) {
      if (arr[i] === arr[row]) return false;
      if (Math.abs(arr[i] - arr[row]) === Math.abs(i - row)) return false;
    }
    return true;
  };

  const dfs = (arr, row) => {
    if (row === n) {
      ++cases;
      return;
    }

    for (let i = 1; i <= n; ++i) {
      arr[row + 1] = i;
      if (isValid(arr, row + 1)) dfs(arr, row + 1);
    }
  };

  for (let i = 1; i <= n; ++i) {
    const board = Array.from({ length: n + 1 }, () => 0);
    board[1] = i;
    dfs(board, 1);
    console.log(i, board);
  }

  return cases;
};

/**
 * BackTracking
 * 깊이 우선 탐색 등의 알고리즘으로 탐색을 진행하다가,
 * 다음에 도달하는 노드로 인해 정답이 될 수 없는 경우가 발생하면 해당 라인을 포기하고 돌아오는 기법
 */
export const backtracking = () => {};

/**
 * @param {number} n 
 */
export const nQueen = (n) => {
  let count = 0;

  const dfs = () => {
    
  }
}

export const examples__arr = [
  {
    n: 4,
    answer: 2,
  },
];

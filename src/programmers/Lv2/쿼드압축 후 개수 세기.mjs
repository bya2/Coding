export const solution = (grid = [[1]]) => {
  const results = [0, 0];
  const n = Math.log2(grid.length);

  const divide = (grid = [[0]], n) => {
    // 0과 1의 갯수 구하기
    // 나눌 수 없으면, 갯수 더하기
    // - 압축 가능할 때,
    // - 더 이상 나눌 수 없는 크기일 때 (n:0 -> n:1)
    const bits = [].concat(...grid);
    const zeros = bits.filter((b) => b === 0).length;
    const ones = bits.length - zeros;
    // const [zeros, ones] = bits.reduce((acc, curr) => (curr ? ++acc[1] : ++acc[0], acc), [0, 0]);
    const isComp = zeros === 0 || zeros === bits.length;
    // isComp && console.log(grid, n, bits, zeros, ones);

    if (isComp) {
      zeros !== 0 ? results[0]++ : results[1]++;
    } else if (n <= 1) {
      results[0] += zeros; 
      results[1] += ones;
    } else {
      // 나누기(인덱스)
      // - 0 ~ 2**(n-1)-1
      // - 2**(n-1)~2**n-1
      const rangePoints = [0, 2 ** (n - 1), 2 ** n];

      for (let row = 0; row < 2; ++row) {
        for (let col = 0; col < 2; ++col) {
          const g = [...grid]
            .slice(rangePoints[row], rangePoints[row + 1])
            .map((cols) => cols.slice(rangePoints[col], rangePoints[col + 1]));

          divide(g, n - 1);
        }
      }
    }
  };

  divide(grid, n);

  return results;
};

// FIND
// DIVIDE -> 0 ~ 2 ** (n-1) - 1 / 2 ** (n - 1) ~ 2 ** n - 1

export const find = (grid) => {
  const arr = [].concat(...grid);
  const len = arr.length;
  const tmp = arr[0];
  const tmpLen = arr.filter((v) => v === tmp).length;
  const isValid = len === tmpLen;
  if (!isValid) {
  }
};

export const divideGrid = (grid = [[]], n) => {
  grid.slice(0, 2 ** (n - 1)).map((arr) => arr.slice(0, 2 ** (n - 1)));
};

export const examples__arr = [
  {
    arr: [
      [1, 1, 0, 0],
      [1, 0, 0, 0],
      [1, 0, 0, 1],
      [1, 1, 1, 1],
    ],
    answer: [4, 9],
  },
  {
    arr: [
      [1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 1, 1, 1, 1],
      [0, 1, 0, 0, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 1, 0, 0, 1],
      [0, 0, 0, 0, 1, 1, 1, 1],
    ],
    answer: [10, 15],
  },
];

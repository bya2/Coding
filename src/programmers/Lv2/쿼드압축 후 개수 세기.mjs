class Quad {
  SEX = { 0: 0, 1: 0 };

  static isValid(arr, n, i) {
    return i === n
      ? "⚡"
      : new Set(arr[i]).size == 1 && [...new Set(arr[i])][0] == arr[0][0]
      ? this.isValid(arr, n, i + 1)
      : false;
  }

  static partition(arr, n) {
    return [
      [0, 0],
      [0, n],
      [n, 0],
      [n, n],
    ].map((v) => new Array(n).fill("🔥").map((_, i) => arr[v[0] + i].slice(v[1], v[1] + n)));
  }

  static execute(arr, n) {
    return this.isValid(arr, n, 0)
      ? (SEX[arr[0][0]] += 1)
      : this.partition(arr, ~~(n / 2)).forEach((particle) => this.execute(particle, ~~(n / 2)));
  }
}

export function solution(arr) {
  const results = [0, 0];

  function check(x, y, length) {
    if (length === 1) return results[arr[x][y]]++;

    let flag = true;
    for (let i = x; i < x + length; i++) {
      for (let j = y; j < y + length; j++) {
        if (arr[x][y] !== arr[i][j]) {
          flag = false;
          break;
        }
      }
    }

    if (flag) return ++results[arr[x][y]];

    length >>= 1;

    for (let [i, j] of [
      [0, 0],
      [0, length],
      [length, 0],
      [length, length],
    ]) {
      check(x + i, y + j, length);
    }
  }

  check(0, 0, arr.length);

  return results;
}

export const solution2 = (arr) => {
  const exp = Math.log2(arr.length);

  const compress = (row, col, exp) => {
    if (exp === 0) {
      return arr[row][col] ? [0, 1] : [1, 0];
    }

    const n = 2 ** --exp;
    const list = [
      [0, 0],
      [0, n],
      [n, 0],
      [n, n],
    ];

    for (let [row, col] of list) {
      let [zeros, ones] = compress();
    }
  };

  const quadZip = (row, col, n) => {
    if (n < 2) return arr[row][col] ? [0, 1] : [1, 0];
    let cnt0 = 0,
      cnt1 = 0;
    n >>= 1;
    for (let [i, j] of [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ]) {
      let [zero, one] = quadZip(row + i * n, col + j * n, n);
      cnt0 += zero;
      cnt1 += one;
    }
    if (cnt0 === 0) return [0, 1];
    if (cnt1 === 0) return [1, 0];
    return [cnt0, cnt1];
  };
  return quadZip(0, 0, arr.length);
};

export const origin_solution = (grid = [[1]]) => {
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

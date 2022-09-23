class NumberArray extends Array {
  sortByValueInDesc() {
    this.sort((a, b) => b - a);
  }

  getSumOfSquares() {
    return this.reduce((a, b) => a + Math.pow(b, 2), 0);
  }

  downgrade(cost = 0) {
    this.sortByValueInDesc();

    while (cost && this[0]) {
      for (let i = 0, len = this.length; cost && i < len; ++i) {
        if (this[i] >= this[0]) {
          --cost;
          --this[i];
        } else {
          break;
        }
      }
    }
  }
}

// Greedy
export const solution = (n, works) => {
  const arr = new NumberArray(...works);
  arr.downgrade(n);
  return arr.getSumOfSquares();
};

export const fail_solution = (n, works) => {
  const arr = new NumberArray(...works);
  arr.sortByValueInDesc();

  for (let i = 0, len = arr.length; n >= 0 && i < len; ++i) {
    if (i >= 1 && arr[i] > arr[i - 1]) --i;
    while (arr[i] <= arr[i + 1]) ++i;

    for (let j = 0; j <= i; ++j, --n) {
      if (n <= 0) return arr.getSumOfSquares();
      --arr[j];
    }
  }

  return arr.getSumOfSquares();
};
// n: 남은 시간
// works: 작업량
// 피로도: 작업하고 남은 작업량의 제곱을 더한 값

// 1시간 = 작업량1

export const examples__arr = [
  {
    n: 4,
    works: [4, 3, 3],
    answer: 12,
  },
  {
    n: 1,
    works: [2, 1, 2],
    answer: 6,
  },
  {
    n: 3,
    works: [1, 1],
    answer: 0,
  },
];

const calcFuncs = [(a, b) => a + b, (a, b) => a - b, (a, b) => a * b, (a, b) => a / b];

const getCalcResults = (_num, memo__arr, N) => {
  const results__set = new Set();
  results__set.add(Number(String(N).repeat(_num)));

  for (let i = 1; i < _num; ++i) {
    for (const calcFunc of calcFuncs) {
      for (const operand1 of memo__arr[i].values()) {
        for (const operand2 of memo__arr[_num - i].values()) {
          const result = calcFunc(operand1, operand2);
          results__set.add(result);
        }
      }
    }
  }

  return results__set;
};

export const solution = (N, number) => {
  if (N === number) return 1;

  const memo__arr = [null, new Set([N])];

  for (let i = 1; i <= 8; ++i) {
    memo__arr[i] = getCalcResults(i, memo__arr, N);
    if (memo__arr[i].has(number)) return i;
  }

  return -1;
};

export const examples__arr = [
  {
    N: 5,
    number: 12,
    answer: 4,
  },
  {
    N: 2,
    number: 11,
    answer: 3,
  },
];

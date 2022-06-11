export const solution = (_numbers) => {
  let sum = 0;
  const numbers = [..._numbers].sort((a, b) => a - b);

  for (let currNum = 0, idx = 0; currNum <= 9; ++currNum) {
    const existNum = numbers[idx];

    if (typeof existNum === "undefined") {
      sum += currNum;
      continue;
    }

    if (currNum !== existNum) {
      const diff = existNum - currNum;

      for (let k = 0; k < diff; ++k) {
        sum += currNum + k;
      }

      currNum += diff;
    }

    ++idx;
  }

  return sum;
};

export const other_solution = (_numbers) => {
  const NUM = 9;
  const sum = (NUM * (NUM + 1)) / 2;
  const otherSum = _numbers.reduce((acc, cur) => acc + cur, 0);
  return sum - otherSum;
};

export const examples__arr = [
  { numbers: [1, 2, 3, 4, 6, 7, 8, 0], answer: 14 },
  { numbers: [5, 8, 4, 0, 6, 7, 9], answer: 6 },
];

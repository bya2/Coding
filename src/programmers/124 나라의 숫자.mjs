const divide = (_a, _b) => {
  return [Math.floor(_a / _b), _a % _b];
};

const convert124 = (_n) => {
  return _n === 0 ? 4 : _n;
};

export const solution = (n) => {
  let result = "";
  let tmp = n;

  while (tmp) {
    let [quotient, remainder] = divide(tmp, 3);
    let n124 = convert124(remainder);
    if (n124 === 4) {
      --quotient;
    }
    result = n124 + result;
    tmp = quotient;
  }

  return result;
};

const change124 = (n) => {
  return n === 0 ? "" : change124(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];
};

export const other_solution = (n) => {
  return change124(n);
};

export const examples__arr = [
  {
    n: 1,
    answer: "1",
  },
  {
    n: 2,
    answer: "2",
  },
  {
    n: 3,
    answer: "4",
  },
  {
    n: 4,
    answer: "11",
  },
  {
    n: 5,
    answer: "12",
  },
];

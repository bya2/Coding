class N {
  static getMaximumDivisor(n) {
    if (n === 1) return 0;

    for (let i = 2, len = Math.sqrt(n); i <= len; ++i) {
      if (n % i === 0) {
        return n / i;
      }
    }
    return 1;
  }
}

/**
 * @param {number} begin
 * @param {number} end
 */
export const solution = (begin, end) => {
  const getDivisor = (n) => {
    for (let i = 2, to = Math.sqrt(n); i <= to; ++i) {
      if (n % i === 0 && n / i <= 1e7) {
        return n / i;
      }
    }

    return 1;
  };

  const arr = [];
  for (let i = begin; i <= end; ++i) {
    if (i === 1) {
      arr.push(0);
    } else {
      arr.push(getDivisor(i));
    }
  }

  if (begin === 1) arr[0] = 0;

  return arr;
};

export const examples__arr = [
  {
    begin: 1,
    end: 10,
    answer: [0, 1, 1, 2, 1, 3, 1, 4, 3, 5],
  },
];

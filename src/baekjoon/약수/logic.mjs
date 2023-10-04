/**
 * @param {number} n
 */
export const getDivisors = (n) => {
  const v = [];

  for (let i = 1; i <= n ** 0.5; ++i) {
    if (n % i === 0) {
      v.push(i);
      if (n / i !== i) v.push(n / i);
    }
  }

  return v;
};

export const count = (n) => {
  const count = 0;

  for (let i = 1; i <= n ** 0.5; ++i) {
    if (n % i === 0) {
      ++count;
      if (n / i !== i) ++count;
    }
  }

  return count;
};

export const getCounts = (n) => {
  const eachCounts = [];
  for (let i = 1; i <= n; ++i) {
    for (let j = 1; j <= n; ++j) {
      eachCounts[i * j]++;
    }
  }
  return eachCounts;
};

export const haveOdd = (n) => {
  return Number.isInteger(n ** 0.5);
};

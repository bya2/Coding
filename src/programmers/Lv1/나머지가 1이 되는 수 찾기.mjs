export const solution = (n) => {
  for (let i = 2; i <= n; ++i) {
    if (n % i === 1) {
      return i;
    }
  }
};

export const examples__arr = [
  {
    n: 10,
    answer: 3,
  },
  {
    n: 12,
    answer: 11,
  },
];

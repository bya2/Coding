export const solution = (n) => {
  let sum = 0;
  for (let i = 0; i <= n / 2; ++i) {
    if (n % i === 0) {
      sum += i;
    }
  }
  return sum + n;
};

export const examples__arr = [
  {
    n: 12,
    answer: 28,
  },
  {
    n: 5,
    answer: 6,
  },
];

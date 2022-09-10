export const solution = (n) => {
  return (n + "").split("").reduce((a, b) => (a * 1) + (b * 1), 0);
};

export const examples__arr = [
  {
    n: 123,
    answer: 6,
  },
  {
    n: 987,
    answer: 24,
  },
];

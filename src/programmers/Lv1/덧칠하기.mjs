export const solution = (n, m, section) => {
  let count = 0;
  let completed = 0;
  for (const p of section) {
    if (p > completed) {
      count++;
      completed = p + m - 1;
    }
  }
  return count;
};

export const examples__arr = [
  {
    n: 8,
    m: 4,
    section: [2, 3, 6],
    answer: 2,
  },
  {
    n: 5,
    m: 4,
    section: [1, 3],
    answer: 1,
  },
  {
    n: 4,
    m: 1,
    section: [1, 2, 3, 4],
    answer: 4,
  },
];

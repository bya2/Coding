export const solution = (num) => {
  if (num === 1) return 0;
  for (let i = 1; i <= 500; ++i) {
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    if (num === 1) return i;
  }
  return -1;
};

export const collatz = (num, count = 0) => {
  return num === 1 ? (count >= 500 ? -1 : count) : collatz(num % 2 === 0 ? num / 2 : num * 3 + 1, ++count);
};

export const other_solution = (num) => {
  if (num === 1) return 0;
  return collatz(num);
};

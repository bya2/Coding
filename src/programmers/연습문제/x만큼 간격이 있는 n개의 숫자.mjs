export const solution = (x, n) => {
  const arr = [];
  for (let i = 1; i <= n; ++i) {
    arr.push(x * i);
  }
  return arr;
};

export const other_solution = (x, n) => {
  return Array.from({ length: n }, (_, i) => x * (i + 1));
};

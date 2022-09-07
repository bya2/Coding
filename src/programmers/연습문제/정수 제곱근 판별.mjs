export const solution = (n) => {
  const x = Math.sqrt(n) >> 0;
  return Math.pow(x, 2) === n ? Math.pow(x + 1, 2) : -1;
};

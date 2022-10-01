export const solution = (arr, divisor) => {
  arr = arr.filter((el) => el % divisor === 0).sort((a, b) => a - b);
  return arr.length ? arr : [-1];
};

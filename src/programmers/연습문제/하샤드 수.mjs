export const solution = (x) => {
  const sum = (x + "")
    .split("")
    .map((x) => +x)
    .reduce((a, b) => a + b, 0);

  return x % sum === 0;
};

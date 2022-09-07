export const solution = (n) => {
  return (n + "")
    .split("")
    .map((x) => x * 1)
    .reverse();
};

export const other_solution = (n) => {
  let arr = [];

  do {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);

  return arr;
};

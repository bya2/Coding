export const solution = (n) => {
  return (n + "").split("").sort().reverse().join("") * 1;
};

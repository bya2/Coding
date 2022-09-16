export const solution = (n, a, b) => {
  let i;
  for (i = 0; a !== b; ++i) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
  }
  return i;
};

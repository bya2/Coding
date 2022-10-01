export const solution = (n) => {
  let jump = 0;

  while (n > 0) {
    if (n % 2 === 0) {
      n >>= 1;
    } else {
      --n;
      ++jump;
    }
  }

  return jump;
};

export const examples__arr = `
5	2
6	2
5000	5
`;

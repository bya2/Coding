const getY = (r, x) => {
  const inner = Math.sqrt(r ** 2 - x ** 2) >> 0;
  const outer = inner + 1;
  return [inner, outer];
};

export const solution = (r1 = 1, r2 = 1) => {
  let num = 0;

  for (let x = 1; x < r2; ++x) {
    if (x < r1) {
      num += getY(r2, x)[0] - getY(r1, x)[1];
    } else {
      num += getY(r2, x)[0];
    }
  }

  num *= 4;
  num += (r2 - r1 + 1) * 4;
  return num;
};

export const examples__arr = [
  {
    r1: 2,
    r2: 3,
    answer: 10,
  },
];

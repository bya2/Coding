export const solution = (absolutes, signs) => {
  let sum = 0;
  for (let i = 0; i < absolutes.length; ++i) {
    sum += signs[i] ? absolutes[i] : -1 * absolutes[i];
  }
  return sum;
};

export const examples__arr = [
  {
    absolutes: [4, 7, 12],
    signs: [true, false, true],
    answer: 9,
  },
  {
    absolutes: [1, 2, 3],
    signs: [false, false, true],
    answer: 0,
  },
];

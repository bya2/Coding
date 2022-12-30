/**
 * @param {number} storey
 */
export const solution = (storey) => {
  // 자릿수로 나누고,
  // 윗자리가 가까우면 올림

  let count = 0;
  const ciphers = storey.toString().length;
  for (let i = 0; i < ciphers; ++i) {
    const n = storey % 10;
    if (n > 5) count += 10 - n;
    else count += n;
    storey = Math.round(storey / 10);
  }
  return count;
};

export const examples__arr = [
  {
    storey: 16,
    answer: 6,
  },
  {
    storey: 2554,
    answer: 16,
  },
];

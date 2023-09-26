/**
 * @param {number} n
 */
export const isPrime = (n) => {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  const SQRT_N = Math.sqrt(n);
  for (let i = 3; i <= SQRT_N; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
};

/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  lines.shift();
  return lines
    .map((n) => {
      n = +n;
      if (n === 2) return n;
      if (n % 2 === 0) n++;
      for (let i = n; true; ++i) {
        if (isPrime(i)) return i;
      }
    })
    .join("\n");
};

export const examples = [
  {
    inputs: `3
    6
    20
    100`,
    answer: `7
    23
    101`,
  },
];

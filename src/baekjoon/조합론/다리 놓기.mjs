import { getBinomialCoefficient, getBinomialCoefficient2 } from "./logic.mjs";

export const memoize = (cb) => {
  const cache = new Map();
  return (arg) => {
    if (!cache.has(arg)) {
      const val = cb(arg);
      cache.set(arg, val);
    }
    return cache.get(arg);
  };
};

export const factorial = (number) => {
  const recur = memoize((n) => {
    if (n <= 1) return 1;
    return n * recur(n - 1);
  });

  return recur(number);
};

/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  lines.shift();
  return lines
    .map((line) => line.split(" ").map(Number))
    .map(([n, m]) =>
      // Math.ceil(factorial(m) / (factorial(n) * factorial(m - n)))
      getBinomialCoefficient2(m, n)
    )
    .join("\n");
};

export const examples = [
  {
    inputs: `3
    2 2
    1 5
    13 29`,
    answer: `1
    5
    67863915`,
  },
];

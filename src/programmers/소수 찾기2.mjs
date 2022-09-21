import N from "../Number2.mjs";

export const solution = (n = 2) => {
  return N.numberOfPrimeNumber(2, n);
};

export const solution2 = (n = 2) => {
  let count = 2;
  for (let i = 5; i <= n; i += 2) {
    isPrimeNumber(i) && ++count;
  }
  return count;
};

export const isPrimeNumber = (n) => {
  if (n < 2) return false;
  for (let i = 3, len = Math.sqrt(n); i <= len; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
};

export const getPrimeNumbers = (n) => {
  const set = new Set();
  set.add(2);
  for (let i = 3; i <= n; i += 2) {
    isPrimeNumber(i) && set.add(i);
  }
  return [...set];
};

export const numberOfPrimeNumber = (n) => {
  let count = 1;
  for (let i = 3; i <= n; i += 2) {}
};

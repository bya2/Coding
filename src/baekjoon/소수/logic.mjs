export const isPrimeNumber = (n) => {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5, to = Math.sqrt(n); i <= to; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
};

export const getPrimeNumbers = (n) => {};

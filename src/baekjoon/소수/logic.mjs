/**
 * @param {number} n
 */
export const isPrime = (n) => {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }

  return true;
};

/**
 * @param {number} n
 */
export const getPrimes = (n) => {
  const arr = [2];
  for (let i = 3; i <= n; i += 2) {
    if (isPrime(i)) arr.push(i);
  }
  return arr;
};

/**
 * @param {number} n
 * @param {number} m
 */
export const getPrimesInRange = (n, m) => {
  if (n > m) {
    let tmp = n;
    n = m;
    m = tmp;
  }

  if (n <= 2) n = 2;

  const arr = [];

  if (n % 2 === 0) {
    if (n === 2) arr.push(2);
    n++;
  }

  for (let i = n; i <= m; i += 2) {
    if (isPrime(i)) arr.push(i);
  }
  return arr;
};

/**
 * @param {number} n
 * @param {number} m
 */
export const countPrimesInRange = (n, m) => {
  if (n > m) {
    let tmp = n;
    n = m;
    m = tmp;
  }

  if (n <= 2) n = 2;

  let count = 0;

  if (n % 2 === 0) {
    if (n === 2) count++;
    n++;
  }

  for (let i = n; i <= m; i += 2) {
    if (isPrime(i)) count++;
  }

  return count;
};

/**
 * @param {number} maximum
 */
export const getSieveOfEratosthenes = (maximum) => {
  const sieve = Array(maximum + 1).fill(true);
  sieve[0] = sieve[1] = false;

  const SQRT_MAXIMUM = Math.sqrt(maximum);
  for (let i = 2; i <= SQRT_MAXIMUM; ++i) {
    if (sieve[i]) {
      for (let j = i * i; j <= maximum; j += i) sieve[j] = false;
    }
  }

  return sieve;
};

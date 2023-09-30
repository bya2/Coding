/**
 * @param {number} n
 */
export const isPrime = (n) => {
  let i = 2;
  const SQRT_N = n ** 0.5;
  while (i <= SQRT_N) {
    if (n % i++ < 1) return false;
  }
  return n > 1;
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
 * @param {number} n
 */
export const factorize = (n) => {
  const factors = [];
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

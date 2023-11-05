class SieveOfEratosthenes {
  _sieve;
  _primes;

  /**
   * @param {number} maximum
   */
  constructor(maximum) {
    const sieve = Array(maximum + 1).fill(true);
    sieve[0] = sieve[1] = false;

    const SQRT_MAXIMUM = Math.sqrt(maximum);

    for (let i = 2; i <= SQRT_MAXIMUM; ++i) {
      if (sieve[i]) {
        for (let j = i * i; j <= maximum; j += i) sieve[j] = false;
      }
    }

    this._sieve = sieve;
  }

  get sieve() {
    return this._sieve;
  }

  /**
   * @param {number} ge Greater Than or Equals N
   */
  getPrimes(ge) {
    const _sieve = this._sieve;
    const primes = [];
    const FROM = ge || 0;
    const TO = _sieve.length;

    for (let i = FROM; i < TO; ++i) {
      if (_sieve[i]) primes.push(i);
    }

    return primes;
  }
}

/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  const n = +lines[0];
  const primes = new SieveOfEratosthenes(n).getPrimes();

  let i = 0;
  let j = 0;
  let acc = primes[i];
  let count = 0;

  while (i < primes.length) {
    if (i > j) {
      j = i;
      acc = primes[j];
    }

    if (acc === n) {
      i++;
      j++;
      count++;
    } else if (acc > n) {
      acc -= primes[i++];
    } else {
      acc += primes[++j];
    }

    if (j === primes.length) break;
  }

  return count + "";
};

export const examples = [
  {
    inputs: `20`,
    answer: `0`,
  },
];

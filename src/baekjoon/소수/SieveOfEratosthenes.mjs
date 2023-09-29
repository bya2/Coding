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
   * @param {number} n
   */
  isPrime(n) {
    return this._sieve[n];
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

  /**
   * @param {number} ge Greater Than or Equals N
   */
  countPrimes(ge) {
    const _sieve = this._sieve;
    const FROM = ge || 0;
    const TO = _sieve.length;
    let count = 0;

    for (let i = FROM; i <= TO; ++i) {
      if (_sieve[i]) ++count;
    }

    return count;
  }

  /**
   * 소인수분해
   * @param {number} n
   */
  factorize(n) {
    const elems = [];
    const primes = this.primes();
    const pLen = primes.length;

    let q;
    let r = n;
    let pi = 0;
    while (r >= 2) {
      while (pi < pLen) {
        if (r % primes[pi] === 0) break;
        ++pi;
      }

      q = primes[pi];
      if (q === undefined) break;
      elems.push(q);
      r /= q;
    }

    return elems;
  }
}

export default SieveOfEratosthenes;

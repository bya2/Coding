class SieveOfEratosthenes {
  _bools;
  _primes;

  /**
   * @param {number} maximum
   */
  constructor(maximum) {
    const bools = Array(maximum + 1).fill(true);
    bools[0] = bools[1] = false;

    const CEIL_SQRT_N = Math.ceil(Math.sqrt(maximum));

    for (let i = 2; i <= CEIL_SQRT_N; ++i) {
      if (bools[i]) {
        for (let j = i * i; j <= maximum; j += i) bools[j] = false;
      }
    }

    this._bools = bools;
  }

  isPrime(n) {
    return this._bools[n];
  }

  getPrimes(ge) {
    const _bools = this._bools;
    const primes = [];
    const FROM = ge || 0;
    const TO = _bools.length;

    for (let i = FROM; i < TO; ++i) {
      if (_bools[i]) primes.push(i);
    }

    return primes;
  }

  countPrimes(ge) {
    const _bools = this._bools;
    const FROM = ge || 0;
    const TO = _bools.length;
    let count = 0;

    for (let i = FROM; i <= TO; ++i) {
      if (_bools[i]) ++count;
    }

    return count;
  }

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

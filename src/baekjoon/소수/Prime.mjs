/**
 * 소수 판별
 * @param {number} n
 */
export const isPrime = (n) => {
  if (n < 2) return false;

  const x = ~~Math.sqrt(n);
  for (let i = 2; i <= x; ++i) {
    if (n % i === 0) return false;
  }

  return true;
};

/**
 * 소수의 리스트
 * @param {number} from
 * @param {number} to
 */
export const getPrimesBetween = (from, to) => {
  if (from > to) [from, to] = [to, from];
  if (from <= 2) from = 2;

  const arr = [];
  for (let n = from; n <= to; ++n) if (isPrime(n)) arr.push(n);
  return arr;
};

/**
 * 소수의 개수
 * @param {number} from
 * @param {number} to
 */
export const countPrimesBetween = (from, to) => {
  if (from > to) [from, to] = [to, from];
  if (from <= 2) from = 2;

  let count = 0;
  for (let n = from; n <= to; ++n) if (isPrime(n)) ++count;
  return count;
};

/**
 * 에라스토의 체
 */
export class SieveOfEratosthenes {
  _maximum;
  _isPrimeList;
  _primes;

  /**
   * 소수 판별 리스트 작성
   * @param {number} maximum
   */
  constructor(maximum) {
    const isPrimeList = Array.from({ length: maximum + 1 }, () => true);
    isPrimeList[0] = isPrimeList[1] = false;

    for (let i = 2; i ** 2 <= maximum; ++i) {
      if (isPrimeList[i]) {
        for (let j = i ** 2; j <= maximum; j += i) isPrimeList[j] = false;
      }
    }

    this._maximum = maximum;
    this._isPrimeList = isPrimeList;
  }

  get isPrimeList() {
    return this._isPrimeList;
  }

  /**
   * @param {number} n
   */
  isPrime(n) {
    return this._isPrimeList[n];
  }

  getPrimes() {
    if (typeof this._primes !== "undefined") return this._primes;

    const primes = [];
    const _dict = this._isPrimeList;
    for (let i = 0; i < _dict.length; ++i) if (_dict[i]) primes.push(i);
    this._primes = primes;
    return primes;
  }

  /**
   * @param {number} n
   */
  getPrimesGE(n) {
    if (n > this._maximum) throw new Error();

    const primes = [];
    const _dict = this._isPrimeList;
    for (let i = n; i < _dict.length; ++i) if (_dict[i]) primes.push(i);
    return primes;
  }

  /**
   * 소인수분해
   * @param {number} n
   */
  getFactorizedPrimes(n) {
    const _primes = this.getPrimes();

    const factorized = [];
    let r = n;
     
    while (r >= 2) {
      const q = _primes.find((v) => r % v === 0);
      factorized.push(q);
      if (typeof q === "undefined") break;
      r /= q;
    }

    return factorized;
  }
}

import SieveOfEratosthenes from "./SieveOfEratosthenes.mjs";

// const e = new SieveOfEratosthenes(1_000_000);
// const primes = e.getPrimes();

const e = new SieveOfEratosthenes(1_000_000);
const sieve = e.sieve;
const primes = e.getPrimes();

/**
 * 골드바흐의 추측
 * : 2보다 큰 짝수는 두 소수의 합으로 나타낼 수 있다.
 * @param {string[]} lines
 */
export const solution = (lines) => {
  lines.shift();
  return lines
    .map((n) => {
      n = +n;
      let count = 0;

      const HALF_N = ~~(n / 2);
      for (let i = 0; i <= HALF_N; ++i) {
        sieve[i] && sieve[n - i] && ++count;
      }

      return count;
    })
    .join("\n");
};

export const solution2 = (lines) => {
  lines.shift();
  return lines
    .map((n) => {
      n = +n;
      let count = 0;
      const peek = primes.findIndex((p) => p >= n) - 1;

      for (let i = 0, j = peek; i <= j; ) {
        const sum = primes[i] + primes[j];

        if (sum > n) {
          j--;
          continue;
        }

        if (sum === n) {
          count++;
          j--;
        }

        ++i;
      }

      return count;
    })
    .join("\n");
};

export const fail = (lines) => {
  lines.shift();
  return lines
    .map((n) => {
      n = +n;
      const primes = getPrimes(n);
      let a = 0;
      let b = primes.length - 1;
      let count = 0;

      while (a <= b) {
        let i = a;
        let j = b;
        while (1) {
          const sum = primes[i] + primes[j];
          if (sum === n) {
            count++;
            j--;
            break;
          } else if (sum > n) {
            j--;
            if (i > j) break;
          } else {
            break;
          }
        }
        a++;
        b = j;
      }

      return count;
    })
    .join("\n");
};

export const examples = [
  {
    inputs: `5
    6
    8
    10
    12
    100`,
    answer: `1
    1
    2
    1
    6`,
  },
];

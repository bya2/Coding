import { getPrimes } from "./logic.mjs";

/**
 * 골드바흐의 추측
 * : 2보다 큰 짝수는 두 소수의 합으로 나타낼 수 있다.
 * @param {string[]} lines
 *
 * 투 포인터로 루프
 * 두 수의 합이 N을 초과하면 루프 종료
 *
 */
export const solution = (lines) => {
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

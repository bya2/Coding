// SOLVE1
// 에라스토테네스의 체와 유사한 방식을 이용.
// FAIL: 메모리 초과
const FAIL_countOpend = (maximum) => {
  const sieve = Array(maximum + 1).fill(true);
  let count = 0;

  for (let i = 2; i <= maximum; ++i) {
    for (let j = i; j <= maximum; j += i) {
      if (sieve[j]) {
        sieve[j] = false;
        ++count;
      } else {
        sieve[j] = true;
        --count;
      }
    }
  }

  return maximum - count;
};

// SOLVE2
// 규칙 이용: 소인수분해를 했을 때 같은 소수가 모두 짝수 개면 T, 아니면 F -> 숫자가 어떤 수의 제곱이면 T, 아니면 F
const countOpend = (n) => {
  // return ~~Math.sqrt(n);
  return ~~(n ** 0.5);
};

/**
 * @param {string[]} lines
 * SOLVE1:
 * FAIL1: 메모리 초과
 *
 * SOVLE2:
 */
export const solution = (lines) => {
  return countOpend(+lines[0]) + "";
};

export const examples = [
  {
    inputs: `3`,
    answer: `1`,
  },
  {
    inputs: `24`,
    answer: `4`,
  },
];

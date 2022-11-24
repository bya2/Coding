const N = class {
  static gcd(number1, number2) {
    return number1 % number2 === 0
      ? number2 % 1_000_000
      : this.gcd(number2, number1 % number2);
  }

  static gcdBetween(numbers) {
    return numbers.reduce((n1, n2) => this.gcd(n1, n2));
  }

  static divisors(number) {
    const arr = [];
    for (let i = 1, len = number / 2; i <= len; ++i)
      number % i === 0 && arr.push(i);
    arr.push(number);
    return arr;
  }
};

export const solution = (a, b) => {
  const gcd1 = N.gcdBetween(a);
  const gcd2 = N.gcdBetween(b);

  let tmp1 = b.some((n) => n % gcd1 === 0) ? 0 : gcd1;
  let tmp2 = a.some((n) => n % gcd2 === 0) ? 0 : gcd2;

  return Math.max(tmp1, tmp2);
};

/**
 * RUNTIME ERROR
 * A가 가진 카드들에 적힌 모든 숫자를 나눌 수 있고, B가 가진 카드들에 적힌 모든 숫자들 중 하나도 나눌 수 없는 양의 정수 x
 * B가 가진 카드들에 적힌 모든 숫자를 나눌 수 있고, A가 가진 카드들에 적힌 모든 숫자들 중 하나도 나눌 수 없는 양의 정수 x
 * 들 중 가장 큰 값
 * @param {number[]} a
 * @param {number[]} b
 * @return {number}
 */
export const solution2 = (a, b) => {
  // 1. 최대 공약수
  // - O -> RETURN
  // - X -> 최대 공약수의 약수 리스트, LOOP
  //
  // 2. 각 약수 리스트에서 큰 수를 번갈아가며 조건에 부합하는지 체크

  const gcd1 = N.gcdBetween(a);
  const gcd2 = N.gcdBetween(b);

  const divisors1 = N.divisors(gcd1);
  const divisors2 = N.divisors(gcd2);

  let i = divisors1.length - 1;
  let j = divisors2.length - 1;

  while (i >= 0 && j >= 0) {
    const d1 = divisors1[i];
    const d2 = divisors2[j];

    if (d1 > d2) {
      if (b.every((n) => n % d1 !== 0)) return d1;
      --i;
    } else if (d1 < d2) {
      if (a.every((n) => n % d2 !== 0)) return d2;
      --j;
    } else {
      --i;
      --j;
    }
  }

  while (i >= 0) {
    const d1 = divisors1[i];
    if (b.every((n) => n % d1 !== 0)) return d1;
    --i;
  }

  while (j >= 0) {
    const d2 = divisors2[j];
    if (a.every((n) => n % d2 !== 0)) return d2;
    --j;
  }

  return 0;
};

export const examples__arr = [
  {
    a: [10, 17],
    b: [5, 20],
    answer: 0,
  },
  {
    a: [10, 20],
    b: [5, 17],
    answer: 10,
  },
  {
    a: [14, 35, 119],
    b: [18, 30, 102],
    answer: 7,
  },
];

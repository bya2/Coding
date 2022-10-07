export default class N extends Number {
  // 질문
  isEqualTo(n) {
    return this === n;
  }

  isBiggerThan(n) {
    return this > n;
  }

  isSmallerThan(n) {
    return this < n;
  }

  // 소수
  static isPrimeNumber(n) {
    for (let i = 3, len = Math.sqrt(n); i <= len; i += 2) {
      if (n % i === 0) return false;
    }
    return n >= 2;
  }

  static getPrimeNumbers(from, to) {
    const set = new Set();
    from <= 2 && set.add(2);
    for (let i = from <= 3 ? 3 : from; i <= to; i += 2) {
      this.isPrimeNumber(i) && set.add(i);
    }
    return set;
  }

  static ofPrimeNumbers(from, to) {
    let count = from <= 2 ? 1 : 0;
    for (let i = from <= 3 ? 3 : from; i <= to; i += 2) {
      this.isPrimeNumber(i) && ++count;
    }
    return count;
  }

  // 약수
  static getDivisors(number) {
    const set = new Set();
    for (let i = 1, len = number / 2; i < len; ++i) {
      number % i === 0 && set.add(i);
    }
    return set;
  }

  static isOdd_numberOfDivisors(number) {
    return Number.isInteger(Math.sqrt(number));
  }

  // 공약수, 공배수 (유클리드 호제법)
  static getGCD(number1, number2) {
    return number1 % number2 === 0 ? number2 : this.getGCD(number2, number1 % number2);
  }

  static getLCM(number1, number2) {
    return (number1 * number2) / this.getGCD(number1, number2);
  }

  static getAllGCD(...numbers) {
    return numbers.reduce((n1, n2) => this.getGCD(n1, n2));
  }

  // 합
  // - 숫자 사이의 합
  static sumBetween(integer1, integer2) {
    return ((integer1 + integer2) * (Math.abs(integer1 - integer2) + 1)) / 2;
  }

  // - 1부터 n까지의 합 (가우스의 공식)
  static sumUpTo(number, cost = 1) {
    return (cost * number * (number + 1)) / 2;
  }

  // 같은 개수, 같은 합, 최대 곱이 되는 집합
  static maximumBySameNumberAndEqualSum(numberOfNumbers, sumOfNumbers) {
    const remainder = (sumOfNumbers / numberOfNumbers) >> 0;
    if (!remainder) return [-1];

    const rest = sumOfNumbers % numberOfNumbers;
    if (sumOfNumbers !== 1 && rest === 0) return Array.from({ length: numberOfNumbers }, () => remainder);

    const needs = Array(numberOfNumbers).fill(remainder);
    for (let i = 0, len = needs.length; i < rest; ++i) {
      ++needs[len - 1 - i];
    }
    return needs;
  }
}

export default class N extends Number {
  // 질문
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

  // 숫자 사이의 합
  static sumBetween(integer1, integer2) {
    return ((integer1 + integer2) * (Math.abs(integer1 - integer2) + 1)) / 2;
  }

  // 1부터 n까지의 합 (가우스의 공식)
  static sumUpTo(number, cost = 1) {
    return (cost * number * (number + 1)) / 2;
  }

  // 같은 개수, 같은 합, 최대 곱이 되는 집합
  static getMaximumBySameNumberAndEqualSum(numberOfNumbers, sumOfNumbers) {
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

  // 2의 배수
  // 0에서 1더하기, 2곱하기로 n에 도달
  static numberOfOnesToAddUpTo(n) {
    let jump = 0;

    while (n > 0) {
      n &= n - 1;
      ++jump;
    }

    return jump;
  }

  // 이진수
  // 이진수에서 1의 갯수가 같은 다음 큰 숫자
  getNextBigNumberSameNumberOfOneInBinary(n) {
    let countOfShift = 0,
      numberOfOnes = 0;
    for (; !(n & 1); ++countOfShift) {
      n = n >> 1;
    }
    for (; n & 1; ++countOfShift, ++numberOfOnes) {
      n = n >> 1;
    }
    for (numberOfOnes--, n++; countOfShift !== numberOfOnes; --countOfShift) {
      n = n << 1;
    }
    for (; countOfShift; countOfShift--, n++) {
      n = n << 1;
    }
    return n;
  }

  static numberOfOnesInBinary(n) {
    return n.toString(2).replace(/0/g, "").length;
  }
}

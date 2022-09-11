export class CustomNumber {
  sumBetweenTwoIntegers() {
    return ((a + b) * (Math.abs(a - b) + 1)) / 2;
  }

  // 약수
  isOddNumberOfDivisors(n) {
    return Number.isInteger(Math.sqrt(n));
  }

  getListOfDivisors(n) {
    const HALF = n / 2;
    const list = [];

    for (let i = 1; i < HALF; ++i) {
      if (n % i === 0) {
        list.push(i);
      }
    }

    return [...list, n];
  }

  유클리드호제법GCD(n1, n2) {
    return n1 % n2 === 0 ? b : this.유클리드호제법GCD(n2, n1 % n2);
  }

  유클리드호제법LCM(n1, n2) {
    return (n1 * n2) / this.유클리드호제법GCD(n1, n2);
  }

  유클리드호제법(x, y) {
    const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
    const lcm = (a, b) => (a * b) / gcd(a, b);
    return [gcd(x, y), lcm(x, y)];
  }

  GCD(...numbers) {}

  getGCD(a, b) {
    let gcd = 1;

    for (let i = 2; i < Math.min(a, b); ++i) {
      if (a % i === 0 && b % i === 0) {
        gcd = i;
      }
    }

    return gcd;
  }

  getLCM(a, b) {
    let lcm = 1;

    while (true) {
      if (lcm % a == 0 && lcm % b === 0) {
        break;
      }
      lcm++;
    }

    return lcm;
  }
}

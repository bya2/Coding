export const algorithm__Sieve_Of_Eratosthenes = (n) => {
  const numbers = Array.from({ length: n + 1 }, () => true);
  numbers[0] = numbers[1] = false;

  for (let i = 2; i * i <= i; ++i) {
    if (numbers[i]) {
      for (let j = i * i; j <= i; j += i) {
        numbers[j] = false;
      }
    }
  }

  return numbers;
};

export const isPrime = (n) => {
  if (n <= 1) return false;

  const sqrtN = Math.sqrt(n);
  for (let i = 2; i < sqrtN; ++i) {
    if (n % i === 0) return false;
  }
  return true;
};

export const is_prime_number = (n) => {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }

  return true;
};

export const is_prime_number2 = (n) => {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  const sqrt_n = Math.sqrt(n);
  for (let i = 5; i <= sqrt_n; i += 2) {
    if (n % i === 0) return false;
  }

  return true;
};

export const get_primes_of = (n) => {};

export const get_primes_in_range = (a, b) => {
  if (a > b) [a, b] = [b, a];
  const primes = [];
  if (a <= 2) a = 2;
  for (let i = a; i <= b; ++i) is_prime_number(i) && primes.push(i);
  return primes;
};

export const get_primes_in_range2 = (a, b) => {
  if (a > b) [a, b] = [b, a];
  const primes = a <= 2 ? [2] : [];
  if (a <= 3) a = 3;
  if (a % 2 === 0) a++;
  for (let i = a; i <= b; i += 2) is_prime_number(i) && primes.push(i);
  return primes;
};

export const count_primes_of = (_n) => {};

export const count_primes_in_range = (a, b) => {
  let count = a <= 2 ? 1 : 0;
  if (a <= 3) a = 3;
  a % 2 === 0 && a++;
  for (let i = a; i <= b; i += 2) is_prime_number(i) && ++count;
  return count;
};

export const factorize = (n) => {
  const divide = (n) => {
    for (let i = 2; i <= Math.sqrt(n); ++i) {
      if (n % i === 0) return { prime: i, isPrime: false };
    }
    return { prime: n, isPrime: true };
  };

  const primes = [];

  while (n >= 2) {
    let { prime, isPrime } = divide(n);
    primes.push(prime);
    if (isPrime) break;
    n /= prime;
  }

  return primes;
};

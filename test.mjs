const isPrime = (n) => {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }

  return true;
};

const getPrimes = (n) => {
  const arr = [2];
  for (let i = 3; i <= n; i += 2) {
    if (isPrime(i)) arr.push(i);
  }
  return arr;
};

console.log(getPrimes(100));

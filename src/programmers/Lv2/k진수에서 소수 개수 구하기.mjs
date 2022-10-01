// import N from "../logic/Number.mjs";
class N {
  static isPrimeNumber(n) {
    for (let i = 3, len = Math.sqrt(n); i <= len; i += 2) {
      if (n % i === 0) return false;
    }
    return n >= 2;
  }
}
export const solution = (n = 0, k = 10) => {
  const arr = n.toString(k).split("0");
  let count = 0;
  for (let i = 0, len = arr.length; i < len; ++i) {
    N.isPrimeNumber(arr[i]) && ++count;
  }
  return count;
};

export const examples__arr = [
  {
    n: 437674,
    k: 3,
    answer: 3,
  },
  {
    n: 110011,
    k: 10,
    answer: 2,
  },
];

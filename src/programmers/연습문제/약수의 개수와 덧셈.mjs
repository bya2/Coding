export const solution = (a = 1, b = 1000) => {
  let sum = 0;
  for (let x = a; x <= b; ++x) {
    let l = numbers(x).length;
    if (l % 2 === 0) {
      sum += x;
    } else {
      sum -= x;
    }
  }
  return sum;
};

export const numbers = (n) => {
  let arr = [];
  for (let i = 1; i <= n; ++i) {
    if (n % i === 0) {
      arr.push(i);
    }
  }
  return arr;
};

export const 약수의개수가홀수 = (n) => {
  // 제곱근이 정수면, 약수의 개수가 홀수
  return Number.isInteger(Math.sqrt(n));
};

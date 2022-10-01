// 주어진 자연수를 연속된 자연수의 합으로 표현하는 방법의 수와
// 주어진 수의 홀수인 약수 갯수는 같다
export const solution = (n) => {
  let count = 0;
  for (let i = 1; i <= n; ++i) {
    if (n % i === 0 && i % 2 === 1) count++;
  }
  return count;
}

export const other_solution = (n) => {
  let count = 1;
  const dfs = (x, sum) => {
    sum += x;

    if (sum >= n) {
      if (sum === n) {
        count++;
      }
      return;
    }

    dfs(x + 1, sum);
  };
  for (let i = 1; i <= n / 2; ++i) {
    dfs(i, 0);
  }
  return count;
};

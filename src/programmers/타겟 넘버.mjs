export const solution = (numbers, target) => {
  let num = 0;

  const dfs = (level, sum) => {
    console.log(numbers, level, numbers[level], sum, num, numbers.length);

    if (level === numbers.length) {
      if (sum === target) {
        num += 1;
      }
      return;
    }

    dfs(level + 1, sum + numbers[level]);
    dfs(level + 1, sum - numbers[level]);
  };

  dfs(0, 0);

  return num;
};

export const examples__arr = [
  {
    numbers: [1, 1, 1, 1, 1],
    target: 3,
    answer: 5,
  },
  {
    numbers: [4, 1, 2, 1],
    target: 4,
    answer: 2,
  },
];

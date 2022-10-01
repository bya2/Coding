export const solution = (numbers) => {
  // 모든 경우의 수
  // 오름차순

  // 1.
  // 모든 경우의 수를 배열에 넣고 중복 제거 및 정렬

  const set = new Set();
  for (let i = 0; i < numbers.length - 1; ++i) {
    for (let j = i + 1; j < numbers.length; ++j) {
      set.add(numbers[i] + numbers[j]);
    }
  }
  return [...set].sort((a, b) => a - b);
};

export const examples__arr = [
  {
    numbers: [2, 1, 3, 4, 1],
    answer: [2, 3, 4, 5, 6, 7],
  },
  {
    numbers: [5, 0, 2, 7],
    answer: [2, 5, 7, 9, 12],
  },
];

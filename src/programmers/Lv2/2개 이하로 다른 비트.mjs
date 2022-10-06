export const solution = (numbers) => {
  // x보다 크고 x와 비트가 1~2개 다른 수들 중 제일 작은 수
  // - 찍수는 마지막 비트가 0
  // - 홀수는 마지막 0이 나오는 위치 바로 뒤에는 1이 있으므로, 뒤바꿈
  const minimumOf = (number = 0) => {
    if (number % 2 === 0) return ++number;
    else {
      let bits = [...("0" + number.toString(2))];
      let index = bits.lastIndexOf("0");
      bits[index + 1] = 0;
      bits[index] = 1;
      return parseInt(bits.join(""), 2);
    }
  };

  return numbers.map((n) => minimumOf(n));
};

export const examples__arr = [
  {
    numbers: [2, 7],
    answer: [3, 11],
  },
];

const hanoi3 = (n, from, to, via, paths = []) => {
  if (n === 1) {
    paths.push(`${from} ${to}`);
  } else {
    n--;
    hanoi3(n, from, via, to, paths);
    paths.push(`${from} ${to}`);
    hanoi3(n, via, to, from, paths);
  }
  return paths;
};

export const solution = (inputs) => {
  // INPUT: 첫번째 장대에 쌓인 원판의 개수
  const paths = hanoi3(+inputs[0], 1, 3, 2);
  return paths.length + "\n" + paths.join("\n");
  // OUTPUTS:
  // 1: 옮긴 횟수
  // 2~: 수행 과정 A->B
};

export const examples = [
  {
    inputs: `3`,
    answer: `7
    1 3
    1 2
    3 2
    1 3
    2 1
    2 3
    1 3`,
  },
];

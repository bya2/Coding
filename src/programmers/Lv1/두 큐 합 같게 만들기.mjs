const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
};

export const solution = (queue1, queue2) => {
  // 하나의 큐 POP
  // POP 요소를 다른 큐에 INSERT
  // 각 큐의 원소들의 합이 같게함. 필요 작업의 최소 횟수(POP + INSERT 1회)

  let sum1 = sum(...queue1);
  let sum2 = sum(...queue2);
  let count = 0;

  const TOTAL = sum1 + sum2;
  if (TOTAL % 2 !== 0) return -1;
  const GOAL = TOTAL / 2;

  while (queue1.length && queue2.length) {
    if (sum1 === GOAL) {
      return count;
    } else {
      if (sum1 < GOAL) {
        let tmp = queue2.shift();
        sum1 += tmp;
        queue1.push(tmp);
      } else {
        sum1 -= queue1.shift();
      }
      count++;
    }
  }

  return -1;
};

export const examples__arr = [
  {
    queue1: [3, 2, 7, 2],
    queue2: [4, 6, 5, 1],
    answer: 2,
  },
  {
    queue1: [1, 2, 1, 2],
    queue2: [1, 10, 1, 2],
    answer: 7,
  },
  {
    queue1: [1, 1],
    queue2: [1, 5],
    answer: -1,
  },
];

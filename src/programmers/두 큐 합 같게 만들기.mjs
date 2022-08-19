export const solution = (q1, q2) => {
  // 하나의 큐 POP
  // POP 요소를 다른 큐에 INSERT
  // 각 큐의 원소들의 합이 같게함. 필요 작업의 최소 횟수(POP + INSERT 1회)

  const N = q1.length;

  let sum1 = q1.reduce((a, b) => a + b, 0);
  let sum2 = q2.reduce((a, b) => a + b, 0);
  let count = 0;

  while (sum1 !== sum2) {
    if (count > N) {
      return -1;
    }

    let p1 = q1.shift();
    let p2 = q2.shift();

    q1.push(p2);
    q2.push(p1);

    sum1 += p2 - p1;
    sum2 += p1 - p2;
    count++;

    console.log(sum1, sum2, count, q1, q2);
  }

  return count;
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

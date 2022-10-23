// 투포인터: 배열이 있고 시작과 끝점을 계속해서 움직이면서 원하는 값을 도출하는 알고리즘
export const solution = (queue1, queue2) => {
  let arr = [...queue1, ...queue2];
  let maxCount = arr.length * 2;

  const sumOf = (arr) => arr.reduce((a, b) => a + b);

  let s = 0;
  let e = queue1.length;

  let currSum = sumOf(arr.slice(s, e));
  let goal = sumOf(arr) / 2;

  for (let count = 0; count <= maxCount; ++count) {
    if (currSum < goal) {
      currSum += arr[e];
      e++;
    } else if (currSum > goal) {
      currSum -= arr[s];
      s++;
    } else if (s >= e || e >= arr.length) {
      break;
    } else {
      return count;
    }
  }

  return -1;
};

/**
 * @param {number[]} queue1
 * @param {number[]} queue2
 */
export const fail_time_solution = (queue1, queue2) => {
  let sum1 = sumOf(queue1);
  let sum2 = sumOf(queue2);
  let len = queue1.length + queue2.length;

  let i = 0;
  while (sum1 !== sum2 && i < len) {
    if (sum1 < sum2) {
      const value = queue2.shift();
      sum2 -= value;
      sum1 += value;
      queue1.push(value);
    } else if (sum1 > sum2) {
      const value = queue1.shift();
      sum1 -= value;
      sum2 += value;
      queue2.push(value);
    }
    ++i;
  }

  return sum1 === sum2 ? i : -1;
};

const sumOf = (arr) => {
  return arr.reduce((a, b) => a + b);
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

// 이분 탐색

export const fail_solution = (n, times) => {
  let minute = 0;
  let remaining = [...times];
  let timesLen = times.length;

  while (n) {
    let minIdx = [0];
    let min = remaining[0];

    for (let i = 1; i< timesLen; ++i) {
      if (min === remaining[i]) {
        minIdx.push(i);
      }

      if (min > remaining[i]) {
        min = remaining[i];
        minIdx = [i];
      }
    }

    remaining = remaining.map((el, i, arr) => el - arr[minIdx]);

    for (let i of minIdx) {
      remaining[i] = times[minIdx];
    }

    n -= minIdx.length;
    minute += min;
  }

  return minute;
};

export const examples__arr = [
  {
    n: 6,
    times: [7, 10],
    answer: 28,
  },
];

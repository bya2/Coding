// 이분 탐색

export const binarySearchAlgorithm = (_arr, _tg) => {
  let low = 0;
  let high = _arr.length - 1;
  let mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (_arr[mid] === _tg) {
      return mid;
    } else if (_arr[mid] > _tg) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
};

const binarySearch = (n, times) => {
  let low = 0;
  let high = times[times.length - 1] * n;
  let highest = high;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    let count = 0;
    for (const time of times) {
      count += Math.floor(mid / time);
      if (count >= n) {
        highest = mid;
      }
    }

    if (count >= n) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return highest;
};

export const solution = (n, times) => {
  times.sort((a, b) => a - b);
  return binarySearch(n, times);
};

export const fail_solution = (n, times) => {
  let minute = 0;
  let remaining = [...times];
  let timesLen = times.length;

  while (n) {
    let minIdx = [0];
    let min = remaining[0];

    for (let i = 1; i < timesLen; ++i) {
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

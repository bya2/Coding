export const solution = (sizes) => {
  // 가장 큰 것을 한 방향
  // 나머지의 작은 부분을 모두 반대방향 - 그 중 가장 큰 거

  const N = sizes.length;
  let wi = 0;
  let hi = 0;
  for (let i = 0; i < N; ++i) {
    let [w, h] = sizes[i];
    if (w < h) {
      [sizes[i][0], sizes[i][1]] = [h, w];
      [w, h] = sizes[i];
    }
    if (sizes[wi][0] <= w) {
      wi = i;
    }
    if (sizes[hi][1] < h) {
      hi = i;
    }
  }

  return sizes[wi][0] * sizes[hi][1];
};

// console.log(sizes, sizes[wi][0], sizes[wi === hi ? di : hi][1]);
export const examples__arr = [
  {
    sizes: [
      [60, 50],
      [30, 70],
      [60, 30],
      [80, 40],
    ],
    answer: 4000,
  },
  {
    sizes: [
      [10, 7],
      [12, 3],
      [8, 15],
      [14, 7],
      [5, 15],
    ],
    answer: 120,
  },
  {
    sizes: [
      [14, 4],
      [19, 6],
      [6, 16],
      [18, 7],
      [7, 11],
    ],
    answer: 133,
  },
];

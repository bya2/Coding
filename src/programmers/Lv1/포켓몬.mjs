// 해시
// LV.1

export const solution = (numbers) => {
  const N = numbers.length;
  const HALF = N / 2;

  let kinds = 0;

  numbers.reduce((obj, t) => {
    if (!obj[t]) {
      obj[t] = 1;
      kinds++;
    }
    return obj;
  }, {});

  if (kinds > HALF) {
    return HALF;
  } else {
    return kinds;
  }
};

export const examples__arr = [
  {
    numbers: [3, 1, 2, 3],
    answer: 2,
  },
  {
    numbers: [3, 3, 3, 2, 2, 4],
    answer: 3,
  },
  {
    numbers: [3, 3, 3, 2, 2, 2],
    answer: 2,
  },
];

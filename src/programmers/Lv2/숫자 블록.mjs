/**
 * @param {number} begin
 * @param {number} end
 */
export const solution = (begin, end) => {
  const len = end - begin + 1;
  const arr = Array.from({ length: len + 1 }, () => 0);
  let n = begin * 2;
  let i = n - begin + 1;

  if (n > end) return arr;

  for (; i < len; ++i, ++n) {
    for (let d = 2; ; ++d) {
      if (n % d === 0) {
        arr[i] = d;
        break;
      }
    }
  }

  while (i < len) {
    let d = 2;
    while (1) {
      if (n % d === 0) {
        arr[i] = d;
        break;
      }
      ++d;
    }

    n++;
    i++;
  }

  arr.shift();
  return arr;
};

export const examples__arr = [
  {
    begin: 1,
    end: 10,
    answer: [0, 1, 1, 2, 1, 3, 1, 4, 3, 5],
  },
];

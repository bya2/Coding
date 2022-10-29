/**
 * @param {number[]} numbers
 */
export const solution = (numbers) => {
  return numberOfCombs(numbers);
};

const numberOfCombs = (numbers) => {
  let numberOf = 0;

  const cb = (acc, index, count) => {
    if (count === 3) {
      if (acc === 0) {
        numberOf++;
      }
      return;
    }

    for (let i = index, len = numbers.length; i < len; ++i) {
      cb(acc + numbers[i], i + 1, count + 1);
    }
  };

  cb(0, 0, 0);

  return numberOf;
};

export const examples__arr = [
  {
    n: [-2, 3, 0, 2, -5],
    answer: 2,
  },
  {
    n: [-3, -2, -1, 0, 1, 2, 3],
    answer: 5,
  },
  {
    n: [-1, 1, -1, 1],
    answer: 0,
  },
];

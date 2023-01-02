/**
 * @param {number} n
 */
export const solution = (n) => {
  let count = 0;
  let acc = 0;

  while (n) {
    let cipher = n % 10;
    n = ~~(n / 10);

    if (cipher >= 6) {
      count += 10 - cipher;
      n++;
    } else {
      count += cipher;
    }

    console.log("cipher:", cipher >= 6 ? 10 - cipher : cipher);

    let upper = n % 10;

    if (cipher === 5) {
      if (upper >= 6) {
        n++;
        if (acc) {
          count -= acc;
          acc = 0;
        }
      } else {
        acc++;
      }
    }
  }

  console.log("acc:", acc);

  return count;
};

export const examples__arr = [
  {
    storey: 16,
    answer: 6,
  },
  {
    storey: 2554,
    answer: 16,
  },
  {
    storey: 75,
    answer: 8,
  },
  {
    storey: 555,
    answer: 14,
  },
];

/**
 * @param {number} n
 */
export const solution = (n) => {
  let count = 0;
  let flag = 0;
  let tmp = 0;

  console.log("n:", n, "\t", "count: 0");

  while (n) {
    let cipher = n % 10;

    if (cipher >= 6) {
      count += 10 - cipher;
      n = Math.ceil(n / 10);
      if (flag) count -= flag;
    } else {
      count += cipher;
      n = Math.floor(n / 10);
      if (cipher === 5) {
        if (n) flag++;
        else if (flag) count -= flag - 1;
      } else if (flag) {
        flag = 0;
      }
    }

    console.log(
      "n:",
      n,
      "\t",
      `count: ${count}(+${count - tmp})`,
      "\t",
      `flag: ${flag}`
    );

    tmp = count;
  }

  return count;
};

/**
 * @param {number} n
 */
export const solution2 = (n) => {
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
  {
    storey: 525,
    answer: 12,
  },
];

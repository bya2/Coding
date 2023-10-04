if (!Math.mm) {
  Math.minmax = (...numbers) => {
    let min = numbers[0],
      max = numbers[0];

    for (let i = 0; i <= numbers.length; ++i) {
      if (max < numbers[i]) max = numbers[i];
      if (min > numbers[i]) min = numbers[i];
    }

    return [min, max];
  };
}

/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  const [min, max] = Math.minmax(...lines[1].split(" ").map(Number));
  return min * max + "";
};

export const examples = [
  {
    inputs: `2
    4 2`,
    answer: `8`,
  },
];

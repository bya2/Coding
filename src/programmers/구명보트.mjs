export const solution = (peoples, limit) => {
  peoples.sort((a, b) => a - b);
  let i = 0,
    j = peoples.length - 1,
    count = 0;
  while (i <= j) {
    let w = peoples[i] + peoples[j];
    if (w <= limit) {
      ++count;
      ++i;
      --j;
    } else {
      ++count;
      --j;
    }
  }
  return count;
};

export const other_solution = (peoples, limit) => {
  peoples.sort((a, b) => a - b);
  let i = 0;
  for (let j = peoples.length - 1; i < j; j--) {
    if (peoples[i] + peoples[j] <= limit) ++i;
  }
  return peoples.length - i;
};

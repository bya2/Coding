export const solution = (arr) => {
  return hIndex(arr);
};

export const hIndex = (arr) => {
  arr.sort((a, b) => b - a);

  let i;
  for (i = 0; i + 1 <= arr[i]; ++i) {}
  return i;
};

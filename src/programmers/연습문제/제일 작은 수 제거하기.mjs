export const solution = (arr) => {
  const m = Math.min(...arr);
  const i = arr.indexOf(m);
  deleteAt(arr, i);
  return arr.length === o ? [-1] : arr;
};

const deleteAt = (arr, i) => {
  return arr.splice(i, 1);
};

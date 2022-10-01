export const solution = (arr1, arr2) => {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => b - a);
  let sum = 0;
  while (arr1.length) {
    let el1 = arr1.shift();
    let el2 = arr2.shift();
    sum += el1 * el2;
  }
  return sum;
};

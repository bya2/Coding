export const solution = (arr1 = [[]], arr2 = [[]]) => {
  const rl = arr1.length;
  const cl = arr1[0].length;

  for (let i = 0; i < rl; ++i) {
    for (let j = 0; j < cl; ++j) {
      arr1[i][j] += arr2[i][j];
    }
  }

  return arr1;
};

export const addMatrix = (A, B) => {
  return A.map((a, i) => a.map((b, j) => b + B[i][j]));
};

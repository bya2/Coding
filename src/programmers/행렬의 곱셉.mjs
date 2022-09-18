export const solution = (arr1 = [[0]], arr2 = [[0]]) => {
  const ARR1_ROWS_NUM = arr1.length;
  const ARR1_COLS_NUM = arr2.length;
  const ARR2_COLS_NUM = arr2[0].length;

  const mat = Array.from({ length: ARR1_ROWS_NUM }, () => Array.from({ length: ARR2_COLS_NUM }, () => 0));

  for (let i = 0; i < ARR1_ROWS_NUM; ++i) {
    for (let j = 0; j < ARR1_COLS_NUM; ++j) {
      for (let k = 0; k < ARR2_COLS_NUM; ++k) {
        mat[i][k] += arr1[i][j] * arr2[j][k];
      }
    }
  }

  return mat;
};

export const other_solution = (arr1 = [[0]], arr2 = [[0]]) => {
  return arr1.map((row) => arr2[0].map((_, i) => row.reduce((sum, cell, j) => sum + cell * arr2[j][i], 0)));
};

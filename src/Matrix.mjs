export class Matrix {
  static add(arr1, arr2) {
    return arr1.map((row, i) => row.map((col, j) => col + arr2[i][j]));
  }

  static multiply(arr1, arr2) {
    return arr1.map((row) => arr2[0].map((_, colIdx) => row.reduce((sum, cell, rowIdx) => sum + cell * arr2[rowIdx][colIdx], 0)));
  }
}

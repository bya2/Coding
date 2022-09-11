export class Matrix {
  static add(arr1, arr2) {
    return arr1.map((row, i) => row.map((col, j) => col + arr2[i][j]));
  }
}

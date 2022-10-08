import ArrGrid from "./ArrayGrid.mjs";
export default class QuadTree extends ArrGrid {
  constructor() {
    // const exp = Math.log2(this.length);
    // const length = 2 ** exp;
    this.compress(0, 0, this.length);
  }

  compress(x, y, length) {
    if (length === 1) return results[this[x][y]]++;

    let flag = true;
    for (let i = x; i < x + length; i++) {
      for (let j = y; j < y + length; j++) {
        if (this[x][y] !== this[i][j]) {
          flag = false;
          break;
        }
      }
    }

    if (flag) return ++results[this[x][y]];

    length >>= 1;

    for (let [i, j] of [
      [0, 0],
      [0, length],
      [length, 0],
      [length, length],
    ]) {
      this.compress(x + i, y + j, length);
    }
  }
}

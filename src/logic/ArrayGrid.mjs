import Arr from "./Array.mjs";

export default class ArrGrid extends Arr {
  scan() {}

  findAll() {
    const arr = [];

    for (let i = 1, len = this.length; i < len; ++i) {
      for (let j = 1, len = this[0].length; j < len; ++j) {}
    }

    return arr;
  }

  getSquare(from = 0, to = 1) {
    const arr = new Arr();

    for (let i = 0; i <= to; ++i) {
      for (let j = 0; j <= to; ++j) {
        arr.push([from + i, from + j]);
      }
    }

    return arr;
  }

  static createSortedNumber(rows, columns) {
    const grid = new ArrGrid();

    for (let i = 0, count = 1; i < rows; ++i) {
      grid[i] = [];
      for (let j = 0; j < columns; ++j, ++count) {
        grid[i].push(count);
      }
    }

    return grid;
  }

  rotatePartsAndGetMinimum(x1, y1, x2, y2, isArrIdx = false) {
    if (!isArrIdx) {
      --x1;
      --y1;
      --x2;
      --y2;
    }

    const tmp = this[x1][y1];
    let minimum = tmp;

    for (let i = x1; i < x2; ++i) {
      this[i][y1] = this[i + 1][y1];
      minimum = Math.min(this[i + 1][y1], minimum);
    }

    for (let i = y1; i < y2; ++i) {
      this[x2][i] = this[x2][i + 1];
      minimum = Math.min(this[x2][i + 1], minimum);
    }

    for (let i = x2; i > x1; --i) {
      this[i][y2] = this[i - 1][y2];
      minimum = Math.min(this[i - 1][y2], minimum);
    }

    for (let i = y2; i > y1; --i) {
      this[x1][i] = this[x1][i - 1];
      minimum = Math.min(this[x1][i - 1], minimum);
    }

    this[x1][y1 + 1] = tmp;
    return minimum;
  }

  // 한 행을 내려갈 때, 같은 열을 연속해서 사용 불가
  hopscotch(columns = 4) {
    const adjList = Array.from({ length: columns }, (_, i) => i).map((_, i, arr) => arr.filter((v) => v !== i));

    const len = this.length;

    for (let i = 1; i < len; ++i) {
      for (let j = 0; j < columns; ++j) {
        this[i][j] += Math.max(...adjList[j].map((n) => this[i - 1][n]));
      }
    }

    return Math.max(...this[len - 1]);
  }
}

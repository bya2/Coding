const log = console.log;

export class Arr extends Array {
  // 질문
  isEmpty() {
    return this.length === 0;
  }

  has(at) {
    return this.length >= at && typeof this[at] !== "undefined";
  }

  // 동작
  insert(o, at) {
    this.splice(at, 0, o);
  }

  replace(o, at) {
    this.splice(at, 1, o);
  }

  delete(at) {
    this.splice(at, 1);
  }

  swap(index1, index2) {
    [this[index1], this[index2]] = [this[index2], this[index1]];
  }

  compare(index1, index2) {
    return this[index1] < this[index2];
  }

  print() {
    log(`DATA: ${this}\nLENGTH: ${this.length}`);
  }

  static union(arr1, arr2) {}

  static intersection(arr1, arr2) {}
}

export class NArr extends Arr {
  // 질문

  // 행과 열 중 더 큰 인덱스의 값을 가지는 행렬에서 index1부터 index2까지 자르기 (cost부터 시작하는 인덱스)
  sliceFromSerializedMatrix(n, index1, index2, cost = 1) {
    for (let i = index1; i <= index2; ++i) {
      this.push(Math.max(i % n, (i / n) >> 0) + cost);
    }
  }

  // 정렬
  sortByValueInAsc() {
    this.sort((a, b) => a - b);
  }

  sortByValueInDesc() {
    this.sort((a, b) => b - a);
  }

  // 평준화
  // 하향 평준화 (비용 만큼 배열의 값을 빼기)
  downgrade(cost = 0) {
    this.sortByValueInDesc();

    while (cost && this[0]) {
      for (let i = 0, len = this.length; cost && i < len; ++i) {
        if (this[i] >= this[0]) {
          --cost;
          --this[i];
        } else {
          break;
        }
      }
    }
  }

  // 계산
  getSum() {
    return this.reduce((a, b) => a + b, 0);
  }

  getSumOfSquares() {
    return this.reduce((a, b) => a + Math.pow(b, 2), 0);
  }

  getAvg() {
    return this.getSum() / this.length;
  }

  getMaximumAndMinimum() {
    return [Math.max(...this), Math.min(...this)];
  }

  getHIndex() {
    this.sortByValueInDesc();
    let i = 0;
    while (i + 1 <= this[i]) ++i;
    // for (i = 0; i + 1 <= this[i]; ++i) {}
    return i;
  }
}

export class SArr extends Arr {
  // 정렬
  sortByLengthInAsc() {
    this.sort((a, b) => a.length - b.length);
  }

  sortByLengthInDesc() {
    this.sort((a, b) => b.length - a.length);
  }
}

export class ArrStack extends Arr {
  get peek() {
    return this[this.length - 1];
  }
}

export class ArrQueue extends Arr {
  get front() {
    return this[0];
  }

  get rear() {
    return this[this.length - 1];
  }

  enqueue = this.push;

  dequeue = this.shift;
}

export class ArrGrid extends Arr {
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
}

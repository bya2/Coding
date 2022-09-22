const log = console.log;

export class ArrayList extends Array {
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

export class NumberArray extends ArrayList {
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

  // 계산
  getSum() {
    return this.reduce((a, b) => a + b, 0);
  }

  getAvg() {
    return this.getSum() / this.length;
  }

  getMaximum() {
    return Math.max(...this);
  }

  getMinimum() {
    return Math.min(...this);
  }

  getHIndex() {
    this.sortByValueInDesc();
    let i;
    for (i = 0; i + 1 <= this[i]; ++i) {}
    return i;
  }
}

export class StringArray extends ArrayList {
  // 정렬
  sortByLengthInAsc() {
    this.sort((a, b) => a.length - b.length);
  }

  sortByLengthInDesc() {
    this.sort((a, b) => b.length - a.length);
  }
}

export class ArrayStack extends ArrayList {
  get peek() {
    return this[this.length - 1];
  }
}

export class ArrayQueue extends ArrayList {
  get front() {
    return this[0];
  }

  get rear() {
    return this[this.length - 1];
  }

  enqueue = this.push;

  dequeue = this.shift;
}

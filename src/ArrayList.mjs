import { NumberArraySort } from "./Sort.mjs";

export class ArrayList {
  data;
  _size;

  constructor(data = []) {
    this.data = data;
    this._size = data.length;
  }

  get size() {
    return this._size;
  }

  push(element) {
    if (typeof element !== "undefined") {
      ++this._size;
      this.data.push(element);
    }
  }

  shift() {
    if (this._size >= 1) {
      --this._size;
      return this.data.shift();
    }
  }

  pop() {
    if (this._size >= 1) {
      --this._size;
      return this.data.pop();
    }
  }

  isEmpty() {
    return this._size === 0;
  }

  hasAt(index) {
    return typeof this.data[index] !== "undefined";
  }

  replaceAt(index, element) {
    this.data.splice(index, 0, element);
  }

  insertAt(index, element) {
    if (index >= 0) {
      this.data.splice(index, 1, element);
      ++this._size;
    }
  }

  deleteAt(index, count = 1) {
    if (index >= 0) {
      this.data.splice(index, count);
      --this._size;
    }
  }

  swap(index1, index2) {
    const { data } = this;
    [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]];
  }

  compare(index1, index2) {
    const { data } = this;
    return data[index1] < data[index2];
  }
}

export class PrimitiveArrayList extends ArrayList {
  has(value) {
    return this.data.includes(value);
  }
}

export class NumberArrayList extends PrimitiveArrayList {
  sum() {
    return this.data.reduce((a, b) => a + b, 0);
  }

  sortInAsc() {
    NumberArraySort.inAsc(this.data);
  }

  sortInDesc() {
    NumberArraySort.inDesc(this.data);
  }

  getHIndex() {
    const { data, sortInDesc } = this;
    sortInDesc();
    let i;
    for (i = 0; i + 1 <= data[i]; ++i) {}
    return i;
  }

  static N제곱배열자르기(n, posX, posY) {
    const arr = [];
    for (let i = posX; i <= posY; ++i) {
      arr.push(Math.max(i % n, (i / n) >> 0) + 1);
    }
    return arr;
  }
}

export class StringArrayList extends PrimitiveArrayList {}

export class ArrayQueue extends ArrayList {
  get front() {
    return this.data[0];
  }

  get rear() {
    return this.data[this._size - 1];
  }

  enqueue(element) {
    if (typeof element !== "undefined") {
      ++this._size;
      this.data.push(element);
    }
  }

  dequeue() {
    if (this._size >= 1) {
      --this._size;
      return this.data.shift();
    }
  }
}

export class ArrayStack extends ArrayList {
  get peek() {
    return this.data[this._size - 1];
  }

  push(element) {
    if (typeof element !== "undefined") {
      ++this._size;
      this.data.push(element);
    }
  }

  pop() {
    if (this._size >= 1) {
      --this._size;
      return this.data.pop();
    }
  }
}

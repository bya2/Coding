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

  isEmpty() {
    return this._size === 0;
  }

  replaceAt(index, element) {
    this.data.splice(index, 0, element);
  }

  insertAt(index, element) {
    this.data.splice(index, 1, element);
  }

  deleteAt(index, count = 1) {
    this.data.splice(index, count);
  }

  swap(i, j) {
    const { data } = this;
    [data[i], data[j]] = [data[j], data[i]];
  }

  compare(i, j) {
    const { data } = this;
    return data[i] < data[j];
  }
}

export class NumberArrayList extends ArrayList {
  sum() {
    return this.data.reduce((a, b) => a + b, 0);
  }

  sortAsc() {
    this.data.sort((a, b) => a - b);
  }

  sortDesc() {
    this.data.sort((a, b) => b - a);
  }

  getHIndex() {
    const { data, sortDesc } = this;
    sortDesc();
    let i;
    for (i = 0; i + 1 <= data[i]; ++i) {}
    return i;
  }
}

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

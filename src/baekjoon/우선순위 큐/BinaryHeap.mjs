class BinaryHeap {
  _inner;

  constructor(compareFn, initialData = []) {
    this.compare = compareFn || ((a, b) => a > b);
    this._inner = initialData;
  }

  get length() {
    return this._inner.length;
  }

  *[Symbol.iterator]() {
    for (let i = 0; i < this._inner.length; ++i) {
      yield this._inner[i];
    }
  }

  pop() {
    if (this._inner.length <= 1) return this._inner.pop();
    const data = this._inner[0];
    this._inner[0] = this._inner.pop();
    this.siftDown();
    return data;
  }

  push(item) {
    this._inner.push(item);
    if (this._inner.length > 1) this.siftUp();
  }

  siftUp() {
    let i = this._inner.length - 1;
    let pi = (i - 1) >> 1;

    while (i > 0 && this.compare(this._inner[i], this._inner[pi])) {
      this.swap(i, pi);
      i = pi;
      pi = (i - 1) >> 1;
    }
  }

  siftDown() {
    let i = 0;
    let ci = this.compareChildren(i);

    while (
      ci < this._inner.length &&
      this.compare(this._inner[ci], this._inner[i])
    ) {
      this.swap(i, ci);
      i = ci;
      ci = this.compareChildren(i);
    }
  }

  swap(i, j) {
    [this._inner[i], this._inner[j]] = [this._inner[j], this._inner[i]];
  }

  compareChildren(i) {
    const li = i * 2 + 1;
    const ri = li + 1;
    return ri in this._inner && this.compare(this._inner[ri], this._inner[li])
      ? ri
      : li;
  }
}

export default BinaryHeap;

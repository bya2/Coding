export default class Heap extends Array {
  has(at) {
    return this.length >= at && typeof this[at] !== "undefined";
  }

  swap(_index1, _index2) {
    [this[_index1], this[_index2]] = [this[_index2], this[_index1]];
  }

  static parentIndexOf(childIndex) {
    return Math.ceil(childIndex / 2) - 1;
  }

  static childrenIndexesOf(parentIndex) {
    return [parentIndex * 2 + 1, parentIndex * 2 + 2];
  }

  #compare;

  constructor(comparator) {
    super();
    this.#compare = comparator || ((a, b) => a > b);
  }

  #getPriorChildIndex(parentIndex) {
    const [leftChildIndex, rightChildIndex] =
      Heap.childrenIndexesOf(parentIndex);
    return this.has(rightChildIndex) &&
      this.#compare(this[rightChildIndex], this[leftChildIndex])
      ? rightChildIndex
      : leftChildIndex;
  }

  _heapifyUp() {
    for (
      let currentIndex = this.length - 1,
        parentIndex = Heap.parentIndexOf(currentIndex);
      currentIndex >= 1 && this.#compare(this[currentIndex], this[parentIndex]);
      currentIndex = parentIndex, parentIndex = Heap.parentIndexOf(currentIndex)
    ) {
      this.swap(currentIndex, parentIndex);
    }
  }

  _heapifyDown() {
    for (
      let currentIndex = 0, childIndex = this.#getPriorChildIndex(currentIndex);
      this.#compare(this[childIndex], this[currentIndex]);
      currentIndex = childIndex,
        childIndex = this.#getPriorChildIndex(currentIndex)
    ) {
      this.swap(currentIndex, childIndex);
    }
  }

  insert(node) {
    this.push(node);
    if (this.length >= 2) this._heapifyUp();
  }

  poll() {
    if (this.length <= 1) return this.pop();
    else {
      let tmp;
      [tmp, this[0]] = [this[0], this.pop()];
      this._heapifyDown();
      return tmp;
    }
  }
}
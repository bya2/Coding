const binaryTree = {
  parentIndexOf: (childIndex) => Math.ceil(childIndex / 2) - 1,
  childrenIndexesOf: (parentIndex) => [
    parentIndex * 2 + 1,
    parentIndex * 2 + 2,
  ],
};

export default class Heap extends Array {
  #shouldSwap;

  constructor(comparator = (d1, d2) => d1 > d2) {
    super();
    this.#shouldSwap = comparator;
  }

  *[Symbol.iterator]() {
    for (let i = 0; i < this.length; ++i) {
      yield this[i];
    }
  }

  has(index) {
    return index >= 0 && index < this.length;
  }

  swap(index1, index2) {
    [this[index1], this[index2]] = [this[index2], this[index1]];
  }

  priorChildIndexOf(parentIndex) {
    const [leftChildIndex, rightChildIndex] =
      binaryTree.childrenIndexesOf(parentIndex);
    return this.has(rightChildIndex) &&
      this.#shouldSwap(this[rightChildIndex], this[leftChildIndex])
      ? rightChildIndex
      : leftChildIndex;
  }

  _heapifyUp() {
    for (
      let currentIndex = this.length - 1,
        parentIndex = binaryTree.parentIndexOf(currentIndex);
      currentIndex > 0 &&
      this.#shouldSwap(this[currentIndex], this[parentIndex]);
      currentIndex = parentIndex,
        parentIndex = binaryTree.parentIndexOf(currentIndex)
    ) {
      this.swap(currentIndex, parentIndex);
    }
  }

  _heapifyDown() {
    for (
      let currentIndex = 0,
        higherPriorityChildIndex = this.priorChildIndexOf(currentIndex);
      higherPriorityChildIndex < this.length &&
      this.#shouldSwap(this[higherPriorityChildIndex], this[currentIndex]);
      currentIndex = higherPriorityChildIndex,
        higherPriorityChildIndex = this.priorChildIndexOf(currentIndex)
    ) {
      this.swap(currentIndex, higherPriorityChildIndex);
    }
  }

  insert(value) {
    this.push(value);
    if (this.length >= 2) this._heapifyUp();
  }

  extract() {
    if (this.length <= 0) return null;
    else if (this.length === 1) return this.pop();
    else {
      let tmp = this[0];
      this[0] = this.pop();
      this._heapifyDown();
      return tmp;
    }
  }
}

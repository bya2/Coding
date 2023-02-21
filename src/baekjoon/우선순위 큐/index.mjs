Object.defineProperties(Array.prototype, {
  has: {
    value(at) {
      return this.length >= at && typeof this[at] !== "undefined";
    },
  },
  swap: {
    value(index1, index2) {
      [this[index1], this[index2]] = [this[index2], this[index1]];
    },
  },
});

class BTree extends Array {
  static parentIndexOf(childIndex) {
    return Math.ceil(childIndex / 2) - 1;
  }

  static leftChildIndexOf(parentIndex) {
    return parentIndex * 2 + 1;
  }

  static rightChildIndexOf(parentIndex) {
    return parentIndex * 2 + 2;
  }

  static childrenIndexesOf(parentIndex) {
    return [parentIndex * 2 + 1, parentIndex * 2 + 2];
  }
}

export default class Heap extends Array {
  #shouldSwap;

  constructor(comparator) {
    super();
    this.#shouldSwap = comparator ?? ((a, b) => a > b);
  }

  #getPriorChildIndexOf(parentIndex) {
    const [leftChildIndex, rightChildIndex] =
      BTree.childrenIndexesOf(parentIndex);
    return this.has(rightChildIndex) &&
      this.#shouldSwap(this[rightChildIndex], this[leftChildIndex])
      ? rightChildIndex
      : leftChildIndex;
  }

  _heapifyUp() {
    // for (
    //   let currentIndex = this.length - 1,
    //     parentIndex = BTree.parentIndexOf(currentIndex);
    //   // currentIndex > 0 &&
    //   this.#shouldSwap(this[currentIndex], this[parentIndex]);
    //   currentIndex = parentIndex,
    //     parentIndex = BTree.parentIndexOf(currentIndex)
    // ) {
    //   this.swap(currentIndex, parentIndex);
    // }

    let currentIndex = this.length - 1;

    while (currentIndex > 0) {
      const parentIndex = BTree.parentIndexOf(currentIndex);
      if (!this.#shouldSwap(currentIndex, parentIndex)) break;
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
    }
  }

  _heapifyDown() {
    // for (
    //   let currentIndex = 0,
    //     childIndex = this.#getPriorChildIndexOf(currentIndex);
    //   this.#shouldSwap(this[childIndex], this[currentIndex]);
    //   currentIndex = childIndex,
    //     childIndex = this.#getPriorChildIndexOf(currentIndex)
    // ) {
    //   this.swap(currentIndex, childIndex);
    // }

    let currentIndex = 0;
    
    while (true) {
      const [leftChildIndex, rightChildIndex] = BTree.childrenIndexesOf(currentIndex);
      let priorChildIndex = null;
      if (this.#shouldSwap(leftChildIndex, currentIndex)) priorChildIndex = leftChildIndex;
      if (this.#shouldSwap(rightChildIndex, priorChildIndex || currentIndex)) priorChildIndex = rightChildIndex;
      if (priorChildIndex === null) break;
      this.swap(currentIndex, priorChildIndex);
      currentIndex = priorChildIndex;
    }
  }

  insert(value) {
    this.push(value);
    if (this.length >= 2) this._heapifyUp();
  }

  extract() {
    if (this.length === 0) return null;
    else if (this.length === 1) return this.pop();
    else {
      let root = this[0];
      this[0] = this.pop();
      this._heapifyDown();
      return root;
    }
  }
}

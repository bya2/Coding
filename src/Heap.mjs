import { ArrayList } from "./ArrayList.mjs";

const ERR_MSG__HEAP__ROOT_INDEX = "It is less than 1 and cannot be an index.";

// O(logN)
export default class Heap {
  _heap;
  _indexOfRoot;

  constructor(compareFunction, indexOfRoot = 1, arrayData = [null]) {
    try {
      if (indexOfRoot < 1) throw new Error(ERR_MSG__HEAP__ROOT_INDEX);
    } catch (err) {
      console.error(err.message);
      indexOfRoot = 1;
    }

    indexOfRoot >>= 0;
    this._heap = new ArrayList(arrayData ?? Array.from({ length: indexOfRoot }, () => null));
    this._indexOfRoot = indexOfRoot;
    if (typeof compareFunction !== "undefined") {
      this._compare = compareFunction;
    }
  }

  get size() {
    return this._heap.size - this._indexOfRoot;
  }

  isEmpty() {
    return this._heap.size === 1;
  }

  _getIndexOfParent(indexOfChild) {
    return (indexOfChild / 2) >> 0;
  }

  _getIndexesOfChildren(indexOfParent) {
    let indexOfChild = indexOfParent * 2;
    return [indexOfChild, ++indexOfChild];
  }

  _getIndexOfChild(indexOfParent) {
    const { _heap, _compare, _getIndexesOfChildren } = this;

    let [indexOfLeftChild, indexOfRightChild] = _getIndexesOfChildren(indexOfParent);
    return _heap.hasAt(indexOfRightChild) && _compare(_heap.data[indexOfRightChild], _heap.data[indexOfLeftChild])
      ? indexOfRightChild
      : indexOfLeftChild;
  }

  _compare(a, b) {
    return a > b; // MAX_HEAP
  }

  _heapifyUp() {
    const { _heap, _getIndexOfParent, _compare } = this;

    for (
      let indexOfCurrent = _heap.size - 1, indexOfParent = _getIndexOfParent(indexOfCurrent);
      indexOfCurrent >= 2 && _compare(_heap.data[indexOfCurrent], _heap.data[indexOfParent]);
      indexOfCurrent = indexOfParent, indexOfParent = _getIndexOfParent(indexOfCurrent)
    ) {
      _heap.swap(indexOfCurrent, indexOfParent);
    }
  }

  _heapifyDown() {
    const { _heap, _indexOfRoot, _compare } = this;

    for (
      let indexOfCurrent = _indexOfRoot, indexOfChild = this._getIndexOfChild(indexOfCurrent);
      _compare(_heap.data[indexOfChild], _heap.data[indexOfCurrent]);
      indexOfCurrent = indexOfChild, indexOfChild = this._getIndexOfChild(indexOfCurrent)
    ) {
      _heap.swap(indexOfChild, indexOfCurrent);
    }
  }

  insert(value) {
    this._heap.push(value);
    this.size >= 2 && this._heapifyUp();
  }

  poll() {
    const { _heap, _indexOfRoot, size } = this;

    if (size <= 0) return null;
    else if (size === 1) return _heap.pop();
    else {
      const valueOfRoot = _heap.data[_indexOfRoot];
      _heap.data[_indexOfRoot] = _heap.pop();
      this._heapifyDown();
      return valueOfRoot;
    }
  }
}

export class PriorityQueue extends Heap {
  enqueue(value) {
    this.insert(value);
  }

  dequeue() {
    this.poll(value);
  }
}

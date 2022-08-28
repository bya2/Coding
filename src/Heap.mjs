import { ArrayQueue, ArrayStack } from "./ArrayList.mjs";

const pseudocodeOfHeapify = () => {
  // A[i]가 자식노드가 없으면 리턴
  //
};

class Heap {
  indexOfRoot;
  root;
  _stack;

  constructor(indexOfRoot) {
    this.indexOfRoot = indexOfRoot;
    this._stack = new ArrayStack(Array.from({ length: indexOfRoot }, () => null));
    this.root = this._stack.data[indexOfRoot];
  }

  _getIndexOfParent(index) {
    return Math.floor(index / 2);
  }
  _getIndexOfLeft(index) {
    z;
    return index * 2;
  }
  _getIndexOfRight(index) {
    return index * 2 + 1;
  }
  _getIndexesOfChildren(index) {
    let indexOfChlid = index * 2;
    return [indexOfChlid, ++indexOfChlid];
  }
}

export class MaxHeap extends Heap {
  heapifyUp() {
    const { _stack } = this;

    let index = _stack.size - 1;
    
  }

  _sort(i, j) {
    const { _stack } = this;
  }

  insert(data) {
    const { _stack, _getIndexOfParent } = this;

    _stack.push(data);

    let indexOfChild = _stack.size - 1;
    let indexOfParent = _getIndexOfParent(indexOfChild);

    // while (indexOfChlid > 1 )
  }

  pop() {}
}

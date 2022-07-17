import { Queue } from "./List";

interface HeapInterface {
  // protected getIndexOfParent: (indexOfChild: number) => number;
  // protected getIndexOfParent(indexOfChild: number): number;
}

type Node = number | null;

class Heap implements HeapInterface {
  protected declare _root: Node;
  protected declare _indexOfRoot: number;
  protected declare _queue: Queue<Node>;

  constructor(indexOfRoot: number) {
    this._indexOfRoot = indexOfRoot;
    this._queue = new Queue(Array.from({ length: indexOfRoot }, () => null));
    this._root = this._queue.data[indexOfRoot];
  }

  get size() {
    return this._queue.size - this._indexOfRoot;
  }

  protected getIndexOfParent(indexOfChild: number) {
    return (indexOfChild / 2) >> 0;
  }

  protected getIndexesOfChildren(indexOfParent: number): [number, number] {
    let indexOfChild = indexOfParent * 2;
    return [indexOfChild, ++indexOfChild];
  }
}

export class MaxHeap extends Heap {
  insert(value: number) {
    this._queue.enqueue(value);

    let indexOfChild = this._queue.size - 1;
    let indexOfParent = this.getIndexOfParent(indexOfChild);

    while (indexOfChild > 1 && this._queue.compare(indexOfParent, indexOfChild)) {
      this._queue.swap(indexOfParent, indexOfChild);
      indexOfChild = indexOfParent;
      indexOfParent = this.getIndexOfParent(indexOfChild);
    }
  }

  pop() {
    if (this.size < 1) return null;

    // const rear = this._queue.rear;
    const tmp = this._queue.data[this._indexOfRoot];
    this._queue[this._indexOfRoot] = this._queue

  }
}

export class MinHeap extends Heap {
  compareParentIsLargerThanChild(indexOfParent: number, indexOfChild: number): boolean {
    return this._queue.data[indexOfParent] > this._queue.data[indexOfChild];
  }
}


export default class MaxHeap1 extends Heap {
  compareParentIsSmallerThanChild(_pIdx, _cIdx) {
    return this.queue[_pIdx] < this.queue[_cIdx];
  }

  getBiggerNodeIdx(_leftIdx, _rightIdx) {
    return this.queue[_leftIdx] < this.queue[_rightIdx] ? _rightIdx : _leftIdx;
  }

  insert(_value) {
    this.queue.push(_value);

    let cIdx = this.getLastIdx();
    let pIdx = this.getParentIdx();

    while (cIdx > 1 && this.compareParentIsSmallerThanChild(pIdx, cIdx)) {
      this.swap(pIdx, cIdx);
      cIdx = pIdx;
      pIdx = this.getParentIdx(cIdx);
    }
  }

  pop() {
    if (this.getSize() < 1) return null;

    const biggest = this.queue[this.rootIdx];
    this.queue[this.rootIdx] = this.queue.pop();

    let currIdx = this.rootIdx;
    let [leftIdx, rightIdx] = this.getLeftAndRightChildIdx(currIdx);

    if (!this.queue[leftIdx]) return biggest;

    if (!this.queue[rightIdx]) {
      if (this.compareParentIsSmallerThanChild(currIdx, leftIdx)) {
        this.swap(currIdx, leftIdx);
      }
      return biggest;
    }

    while (this.compareParentIsSmallerThanChild(currIdx, leftIdx) || this.compareParentIsSmallerThanChild(currIdx, rightIdx)) {
      const biggerIdx = this.getBiggerNodeIdx(leftIdx, rightIdx);
      this.swap(currIdx, biggerIdx);
      currIdx = biggerIdx;
      [leftIdx, rightIdx] = this.getLeftAndRightChildIdx(currIdx);
    }

    return biggest;
  }
}


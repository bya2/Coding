import Heap from "./index.mjs";

export default class MaxHeap extends Heap {
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

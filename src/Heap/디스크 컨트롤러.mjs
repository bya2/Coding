import Heap from "./index.mjs";

export default class MinHeap extends Heap {
  compareParentIsBiggerThanChild(_pIdx, _cIdx) {
    return this.queue[_pIdx][1] > this.queue[_cIdx][1];
  }

  getSmallerNodeIdx(_leftIdx, _rightIdx) {
    return this.queue[_leftIdx][1] < this.queue[_rightIdx][1] ? _leftIdx : _rightIdx;
  }

  insert(_value) {
    this.queue.push(_value);

    let cIdx = this.getLastIdx();
    let pIdx = this.getParentIdx(cIdx);

    while (cIdx > 1 && this.compareParentIsBiggerThanChild(pIdx, cIdx)) {
      this.swap(pIdx, cIdx);
      cIdx = pIdx;
      pIdx = this.getParentIdx(cIdx);
    }
  }

  pop() {
    if (this.getSize() === 0) {
      return null;
    }

    const smallest = this.queue[this.rootIdx];

    if (this.getSize() === 1) {
      this.queue = [null];
      return smallest;
    }

    this.queue[1] = this.queue.pop();

    let currIdx = this.rootIdx;
    let [leftIdx, rightIdx] = this.getLeftAndRightChildIdx(currIdx);

    if (!this.queue[leftIdx]) {
      return smallest;
    }

    if (!this.queue[rightIdx]) {
      if (this.compareParentIsBiggerThanChild(currIdx, leftIdx)) {
        this.swap(leftIdx, currIdx);
      }
      return smallest;
    }

    while (this.compareParentIsBiggerThanChild(currIdx, leftIdx) || this.compareParentIsBiggerThanChild(currIdx, rightIdx)) {
      const smallerIdx = this.getSmallerNodeIdx(leftIdx, rightIdx);
      this.swap(smallerIdx, currIdx);
      currIdx = smallerIdx;
      [leftIdx, rightIdx] = this.getLeftAndRightChildIdx(currIdx);

      if (leftIdx >= this.getSize()) break;
    }

    return smallest;
  }
}

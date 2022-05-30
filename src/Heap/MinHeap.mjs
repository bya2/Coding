import Heap from "./index.mjs";

export default class MinHeap extends Heap {
  compareParentIsBiggerThanChild(_pIdx, _cIdx) {
    return this.queue[_pIdx] > this.queue[_cIdx];
  }

  getSmallerNodeIdx(_leftIdx, _rightIdx) {
    return this.queue[_leftIdx] < this.queue[_rightIdx] ? _leftIdx : _rightIdx;
  }

  insert(_value) {
    this.queue.push(_value);

    let cIdx = this.getLastIdx();
    let pIdx = this.getParentIdx();

    while (cIdx > 1 && this.compareParentIsBiggerThanChild(pIdx, cIdx)) {
      this.swap(pIdx, cIdx);
      cIdx = pIdx;
      pIdx = this.getParentIdx();
    }
  }

  pop() {
    if (this.getSize() < 1) return null;

    const smallest = this.getRoot();
    this.queue[1] = this.queue.pop();

    let currIdx = 1;
    let [leftIdx, rightIdx] = this.getLeftAndRightChildIdx(currIdx);

    if (!this.queue[leftIdx]) return smallest;

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
    }

    return smallest;
  }
}

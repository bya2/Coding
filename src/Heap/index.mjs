export default class Heap {
  queue = Array.from({ length: this.rootIdx });
  rootIdx = 1;

  getSize() {
    return this.queue.length - this.rootIdx; // QUEUE의 0번 요소에 대한 처리에 따라 달라질 수 있음.
  }

  getParentIdx(_cIdx) {
    return (_cIdx / 2) >> 0;
  }

  getLastIdx() {
    return this.queue.length - 1;
  }

  getLeftAndRightChildIdx(_pIdx) {
    let cIdx = _pIdx * 2;
    return [cIdx, ++cIdx];
  }

  getRoot() {
    return this.queue[this.rootIdx];
  }

  swap(_i, _j) {
    [this.queue[_i], this.queue[_j]] = [this.queue[_j], this.queue[_i]];
  }

  compareParentIsBiggerThanChild(_pIdx, _cIdx) {
    return this.queue[_pIdx] > this.queue[_cIdx];
  }

  compareChildIsBiggerThanParent(_cIdx, _pIdx) {
    return this.queue[_cIdx] > this.queue[_pIdx];
  }

  compareParentIsSmallerThanChild(_pIdx, _cIdx) {
    return this.queue[_pIdx] < this.queue[_cIdx];
  }
}

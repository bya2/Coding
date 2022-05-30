export default class Heap {
  constructor({ rootIdx }) {
    this.rootIdx = rootIdx;
    this.queue = Array.from({ length: rootIdx }, () => null);
    this.root = this.queue[rootIdx];
  }

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

  swap(_i, _j) {
    [this.queue[_i], this.queue[_j]] = [this.queue[_j], this.queue[_i]];
  }
}

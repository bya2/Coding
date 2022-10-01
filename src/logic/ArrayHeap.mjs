import ArrBTree from "./ArrayBinaryTree.mjs";

export default class Heap extends ArrBTree {
  constructor(comparefn) {
    super();
    this.push(null);
    if (typeof comparefn !== "undefined" && comparefn instanceof Function) {
      this._compare = comparefn;
    }
  }

  _compare(a, b) {
    return a > b;
  }

  #getIndexOfChild(idxOfP) {
    let [idxOfLC, idxOfRC] = Heap.indexesOfChildren(idxOfP);
    return this.has(idxOfRC) && this._compare(this[idxOfRC], this[idxOfLC]) ? idxOfRC : idxOfLC;
  }

  #heapifyUp() {
    for (
      let idxOfCurr = this.length - 1, idxOfP = Heap.indexOfParent(idxOfCurr);
      idxOfCurr >= 2 && this._compare(this[idxOfCurr], this[idxOfP]);
      idxOfCurr = idxOfP, idxOfP = Heap.indexOfParent(idxOfCurr)
    ) {
      this.swap(idxOfCurr, idxOfP);
    }
  }

  #heapifyDown() {
    for (
      let idxOfCurr = 1, idxOfC = this.#getIndexOfChild(idxOfCurr);
      this._compare(this[idxOfC], this[idxOfCurr]);
      idxOfCurr = idxOfC, idxOfC = this.#getIndexOfChild(idxOfCurr)
    ) {
      this.swap(idxOfCurr, idxOfC);
    }
  }

  insert(node) {
    this.push(node);
    if (this.length >= 3) {
      this.#heapifyUp();
    }
  }

  poll() {
    if (this.length <= 1) return null;
    else if (this.length === 2) return this.pop();
    else {
      [this[0], this[1]] = [this[1], this.pop()];
      this.#heapifyDown();
      return this[0];
    }
  }
}
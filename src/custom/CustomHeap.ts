import { Stack } from "./List";

interface HeapInterface {}

type V = number | null;

// protected declare getIndexOfParent: (indexOfChild: number) => number;

class Heap implements HeapInterface {
  protected _root: V;
  protected _indexOfRoot: number;
  protected _stack: Stack<V>;

  constructor(indexOfRoot: number) {
    this._indexOfRoot = indexOfRoot;
    this._stack = new Stack<V>(Array.from({ length: indexOfRoot }, () => null));
    this._root = this._stack.data[indexOfRoot];
  }

  protected getIndexOfParent(indexOfChild: number): number {
    return (indexOfChild / 2) >> 0;
  }

  protected getIndexesOfChildren(indexOfParent: number): [number, number] {
    let indexOfChild = indexOfParent * 2;
    return [indexOfChild, ++indexOfChild];
  }
}

export class MaxHeap extends Heap {
  sort() {

  }

  insert(value: number) {
    this._stack.push(value);

    let indexOfChild = this._stack.size - 1;
    let indexOfParent = this.getIndexOfParent(indexOfChild);

    while (indexOfChild > 1 && this._stack.compare(indexOfParent, indexOfChild)) {
      this._stack.swap(indexOfParent, indexOfChild);
      indexOfChild = indexOfParent;
      indexOfParent = this.getIndexOfParent(indexOfChild);
    }
  }

  pop() {
    if (this._stack.size < 1) return null;

    const currRoot = this._stack[this._indexOfRoot];
    this._stack[this._indexOfRoot] = this._stack.pop();

    let indexOfCurrNode = this._indexOfRoot;
    let [indexOfLeft, indexOfRight] = this.getIndexesOfChildren(indexOfCurrNode);

    if (!this._stack[indexOfLeft]) return currRoot;
    if (!this._stack[indexOfRight]) {
      if (this._stack.compare(indexOfCurrNode, indexOfLeft)) {
        this._stack.swap(indexOfCurrNode, indexOfLeft);
      }
      return currRoot;
    }

    while (this._stack.compare(indexOfCurrNode, indexOfLeft) || this._stack.compare(indexOfCurrNode, indexOfRight)) {
      const indexOfBigger = this._stack.compare(indexOfLeft, indexOfRight) ? indexOfRight : indexOfLeft;
      this._stack.swap(indexOfCurrNode, indexOfBigger);
      indexOfCurrNode = indexOfBigger;
      [indexOfLeft, indexOfRight] = this.getIndexesOfChildren(indexOfCurrNode);
    }
  }
}

export class MinHeap extends Heap {
  insert(value: number) {
    this._stack.push(value);

    let indexOfChild = this._stack.size - 1;
    let indexOfParent = this.getIndexOfParent(indexOfChild);

    while (indexOfChild > 1 && this._stack.compare(indexOfParent, indexOfChild)) {
      this._stack.swap(indexOfParent, indexOfChild);
      indexOfChild = indexOfParent;
      indexOfParent = this.getIndexOfParent(indexOfChild);
    }
  }
}

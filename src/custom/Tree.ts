import { Stack } from "./List";

class Tree<D> {
  protected _root: V;
  protected _stack: Stack<V>;

  constructor() {}

  get size() {
    return this._stack.size;
  }

  get root() {
    return this._stack[0];
  }

  getIndexOfParent(indexOfChild: number): number {
    return (indexOfChild / 2) >> 0;
  }

  getIndexesOfChildren(indexOfParent: number): [number, number] {
    let indexOfLeft = indexOfParent * 2;
    return [indexOfLeft, ++indexOfLeft]
  }

  getParent() {}

  getChildren() {}

  insert() {}

  pop() {}

  traversal() {
    
  }
}

import DLL from "../덱/DLL.mjs";

class Node {
  _inner;
  children;

  constructor(inner) {
    this._inner = inner;
    this.children = [null, null];
  }
}

export default class Heap extends DLL {}

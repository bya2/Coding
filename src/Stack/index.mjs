export default class Stack {
  _stack = [];

  constructor(_arr) {
    this._stack = _arr ?? [];
  }

  get stack() {
    return this._stack;
  }

  get size() {
    return this._stack.length;
  }

  push(_node) {
    this._stack.push(_node);
  }

  pop() {
    return this._stack.pop();
  }

  peek() {
    return this._stack[this.size - 1];
  }
}

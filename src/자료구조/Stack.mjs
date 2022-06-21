export default class Stack {
  _stack = [];

  constructor(_arr) {
    this._stack = _arr ?? [];
  }

  get items() {
    return this._stack;
  }

  get size() {
    return this._stack.length;
  }

  get isEmpty() {
    return this.size === 0;
  }

  set items(_arr) {
    this._stack = _arr ?? [];
  }

  push(_item) {
    this._stack.push(_item);
  }

  pop() {
    return this._stack.pop();
  }

  peek() {
    return this._stack[this.size - 1];
  }

  print() {
    console.log(this._stack);
  }
}

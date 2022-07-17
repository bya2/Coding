import List from ".";

export default class Stack<E = any> extends List {
  get peek() {
    return this._data[this._data.length - 1];
  }

  push(el: E) {
    this._data.push(el);
  }

  pop() {
    return this._data.pop();
  }
}

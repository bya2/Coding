import List from ".";

export default class Queue<E = any> extends List<E> {
  get front() {
    return this._data[0];
  }

  get rear() {
    return this._data[this._data.length - 1];
  }

  enqueue(el: E) {
    this._data.push(el);
  }

  dequeue() {
    return this._data.shift();
  }
}
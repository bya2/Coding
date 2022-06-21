export default class Queue {
  _queue = [];

  constructor(_arr) {
    this._queue = _arr ?? [];
  }

  get items() {
    return this._queue;
  }

  get size() {
    return this._queue.length;
  }

  get isEmpty() {
    return this.size === 0;
  }

  set items(_arr) {
    this._queue = _arr ?? [];
  }

  enqueue(_item) {
    this._queue.push(_item);
  }

  dequeue() {
    return this._queue.shift();
  }

  print() {
    console.log(this._queue);
  }
}

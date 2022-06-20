export default class Queue {
  _queue = [];

  constructor(_arr) {
    this._queue = _arr ?? [];
  }

  get queue() {
    return this._queue;
  }

  get size() {
    return this._queue.length;
  }

  enqueue(_item) {
    this._queue.push(_item);
  }

  dequeue() {
    return this._queue.shift();
  }
}

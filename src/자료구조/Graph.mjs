class List {
  _items;
  constructor() {
    this._items = [];
  }
}

class Queue extends LinkedList {
  enqueue(_item) {
    this._items.push(_item);
  }
  dequeue() {
    return this._items.shift();
  }
}

class Stack extends LinkedList {
  get peek() {
    return this._items[this._items.length - 1];
  }
  push(_item) {
    this._items.push(_item);
  }
  pop() {
    return this._items.pop();
  }
}

console.log()

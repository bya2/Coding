class List {
  _items;

  constructor(_items = []) {
    this._items = _items;
  }

  get items() {
    return this._items;
  }

  get size() {
    return this._items.length;
  }

  print() {
    console.log(`ITEMS: ${this._items}\nSIZE: ${this._items.length}`);
  }
}

class Queue extends ListMap {
  enqueue(_item) {
    this._items.push(_item);
  }

  dequeue() {
    return this._items.shift();
  }
}

class Stack {
  push(_item) {
    this._items.push(_item);
  }

  pop() {
    return this._items.pop();
  }
}

class LinkedList {
  _head;
  _tail;
  _length;

  add()
  remove()
  search(_id) {
     
  }
}

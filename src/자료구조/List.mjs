export class List {
  _items;

  constructor(_list = []) {
    this._items = _list;
  }

  get size() {
    return this._items.length;
  }

  get isEmpty() {
    return this.size === 0;
  }

  static get items() {
    return this._items;
  }

  static set items(_items) {
    this.items = _items;
  }

  static insert(_item, _index) {
    this._items.splice(_index, 0, _item);
  }

  static replace(_item, _index) {
    this._items.splice(_index, 1, _item);
  }

  static remove(_item, _index) {
    this._items.splice(_index, 1);
  }

  print() {
    console.log(`DATA:${this._items} SIZE:${this.size}`);
  }
}

export class Queue extends List {
  get front() {
    return this._items[0];
  }

  get rear() {
    return this._items[this.size - 1];
  }

  enqueue(_item) {
    this._items.push(_item);
  }

  dequeue() {
    return this._items.shift();
  }
}

export class Stack extends List {
  get peek() {
    return this._items[this.size - 1];
  }

  push(_items) {
    this._items.push(_items);
  }

  pop() {
    return this._items.pop();
  }
}
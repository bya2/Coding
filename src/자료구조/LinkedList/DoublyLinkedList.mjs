class Node {
  _data;
  _prev;
  _next;

  constructor(_data) {
    this._data = _data;
    this._prev = null;
    this._next = null;
  }

  get data() {
    return this._data;
  }

  get prev() {
    return this._prev;
  }

  get next() {
    return this._next;
  }

  set data(_data) {
    this._data = _data;
  }

  set prev(_node) {
    this._prev = _node;
  }

  set next(_node) {
    this._next = _node;
  }
}

export default class DoublyLinkedList {
  _head;
  _tail;
  _size;

  constructor() {
    this._head = null;
    this._tail = null;
    this._size = 0;
  }

  get head() {
    return this._head;
  }
  get tail() {
    return this._tail;
  }
  get size() {
    return this._size;
  }

  add(_data) {
    let node = new Node(_data);

    if (this._size === 0) {
      this._head = node;
      this._tail = node;
    } else {
      this._tail.next = node;
      node.prev = this._tail;
      this._tail = node;
    }

    ++this._size;
  }

  insert() {}

  remove() {}
}

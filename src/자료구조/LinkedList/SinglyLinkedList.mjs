class Node {
  _data;
  _next;

  constructor(_data) {
    this._data = _data;
    this._next = null;
  }

  get data() {
    return this._data;
  }

  get next() {
    return this._next;
  }

  set data(_data) {
    this._data = _data;
  } 

  set next(_node) {
    this._next = _node;
  }
}

export default class SinglyLinkedList {}

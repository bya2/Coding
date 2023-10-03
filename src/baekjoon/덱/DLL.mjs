class Node {
  _inner;
  prev;
  next;

  constructor(inner) {
    this._inner = inner;
    this.prev = null;
    this.next = null;
  }

  get inner() {
    return this._inner;
  }
}

export default class DLL {
  _head;
  _tail;
  _length;

  /**
   * @param {*} headData
   */
  constructor(headData) {
    if (headData) {
      const node = new Node(headData);
      this._head = node;
      this._tail = node;
      this._length = 1;
    } else {
      this._head = null;
      this._tail = null;
      this._length = 0;
    }
  }

  *[Symbol.iterator]() {
    for (let node = this._head; node; node = node.next) {
      yield node._inner;
    }
  }

  get head() {
    return this._head._inner;
  }

  get tail() {
    return this._tail._inner;
  }

  get length() {
    return this._length;
  }

  isEmpty() {
    return this.length === 0;
  }

  _at(index) {
    if (index < 0) index += this._length;
    if (index < 0 || index >= this._length) return null;

    let node;
    if (index <= this._length / 2) {
      node = this._head;
      for (let i = 0; i < index; ++i) node = node.next;
    } else {
      node = this._tail;
      for (let i = this.length - 1; i > index; --i) node = node.prev;
    }

    return node;
  }

  /**
   * @param {number} index
   */
  at(index) {
    if (index < 0) index += this._length;
    if (index < 0 || index >= this._length) return undefined;

    let node;
    if (index <= this._length / 2) {
      node = this._head;
      for (let i = 0; i < index; ++i) node = node.next;
    } else {
      node = this._tail;
      for (let i = this.length - 1; i > index; --i) node = node.prev;
    }

    return node._inner;
  }

  /**
   * @param {Function} predicate
   */
  find(predicate) {
    for (let node = this._head, i = 0; node; node = node.next, ++i) {
      if (predicate(node._inner, i)) {
        return node._inner;
      }
    }
    return undefined;
  }

  /**
   * @param {Function} predicate
   */
  findIndex(predicate) {
    for (let node = this._head, i = 0; node; node = node.next, ++i) {
      if (predicate(node._inner, i)) {
        return i;
      }
    }
    return -1;
  }

  /**
   * @param {*} item
   */
  unshift(item) {
    const node = new Node(item);

    if (this._length === 0) this._tail = this._head = node;
    else {
      this._head.prev = node;
      node.next = this._head;
      this._head = node;
    }

    this._length++;
  }

  /**
   * @param {*} item
   */
  push(item) {
    const node = new Node(item);

    if (this._length === 0) this._head = this._tail = node;
    else {
      node.prev = this._tail;
      this._tail.next = node;
      this._tail = node;
    }

    this._length++;
  }

  shift() {
    if (this._length === 0) return undefined;

    const v = this._head._inner;

    if (this._length === 1) this._tail = this._head = null;
    else {
      this._head = this._head.next;
      this._head.prev = null;
    }

    this._length--;

    return v;
  }

  pop() {
    if (this._length === 0) return undefined;

    const v = this._tail._inner;

    if (this._length === 1) this._head = this._tail = null;
    else {
      this._tail = this._tail.prev;
      this._tail.next = null;
    }

    this._length--;

    return v;
  }

  extractAt(index) {
    if (index < 0) index += this._length;
    if (index < 0 || index >= this._length) return undefined;
    if (index === 0) return this.shift();

    const prev = this._at(index - 1);
    const curr = prev.next;
    const next = curr.next;

    const extractData = curr._inner;

    prev.next = next;
    curr.next = null;

    this._length--;

    return extractData;
  }

  clear() {
    let node = this._head;
    while (node) {
      const next = node.next;
      node.next = null;
      node = next;
    }

    this._tail = null;
    this._head = null;
    this._length = 0;
  }

  toArray() {
    const arr = [];
    for (let node = this._head; node; node = node.next) arr.push(node._inner);
    return arr;
  }

  /**
   * @param {Function} comparator
   */
  sort(comparator) {
    const arr = this.toArray();
    arr.sort(comparator);
    for (let i = 0, node = this._head; node; ++i, node = node.next) {
      node._inner = arr[i];
    }
  }

  clone() {
    const dll = new DLL();
    for (let node = this._head; node; node = node.next) dll.push(node);
    return dll;
  }

  print() {
    return `[ ${this.toArray().join(" <=> ")} ]`;
  }
}

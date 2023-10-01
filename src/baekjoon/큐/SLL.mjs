class Node {
  _inner;
  next;

  constructor(inner) {
    this._inner = inner;
    this.next = null;
  }

  get inner() {
    return this._inner;
  }
}

export default class SLL {
  _head;
  _tail;
  _length;

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

  get head() {
    return this._head;
  }

  get tail() {
    return this._tail;
  }

  get length() {
    return this._length;
  }

  *[Symbol.iterator]() {
    for (let node = this._head; node; node = node.next) {
      yield node._inner;
    }
  }

  isEmpty() {
    return this._length !== 0;
  }

  _at(index) {
    if (index < 0) index += this._length;
    if (index < 0 || index >= this._length) return null;

    let node = this._head;
    for (let i = 0; i <= index; ++i) node = node.next;
    return node;
  }

  /**
   * @param {number} index
   */
  at(index) {
    if (index < 0) index += this._length;
    if (index < 0 || index >= this._length) return undefined;

    let node = this._head;
    for (let i = 0; i <= index; ++i) node = node.next;

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
    node.next = this._head;
    this._head = node;

    this._length++;
    if (this._head.next === null) this._tail = this._head;
  }

  /**
   * @param {*} item
   */
  push(item) {
    if (this._length === 0) this.unshift(item);
    else {
      const node = new Node(item);
      this._tail.next = node;
      this._tail = node;
      this._length++;
    }
  }

  shift() {
    if (this._length === 0) throw new Error();

    const extractData = this._head._inner;

    const temp = this._head.next;
    this._head.next = null;
    this._head = temp;

    this._length--;
    if (this._length < 1) this._tail = null;

    return extractData;
  }

  /**
   * @param {number} index
   */
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

    return extractData;
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

  clone() {
    const sll = new SLL();
    for (let node = this._head; node; node = node.next) sll.push(node);
    return sll;
  }

  print() {
    let s = "[ ";
    for (let node = this._head; node; node = node.next)
      s += `${node._inner} => `;
    s += " ]";
    return s;
  }
}

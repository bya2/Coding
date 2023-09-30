function Node(data) {
  this.data = data;
  this.prev = null;
  this.next = null;
}

export default class DLL {
  _head;
  _tail;
  _capacity;

  /**
   * @param {Node} head
   */
  constructor(head) {
    if (head) {
      this._head= head;
    }
  }

  *[Symbol.iterator]() {
    let node = this._head;
    while (node) {
      yield node.data;
      node = node.next;
    }
  }
}

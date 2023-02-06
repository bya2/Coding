class Node {
  data;
  next = null;
  prev = null;

  constructor(data) {
    this.data = data;
  }
}

class Deque {
  head = null;
  tail = null;
  length = 0;

  *[Symbol.iterator]() {
    let current = this.head;
    while (current) {
      yield current.data;
      current = current.next;
    }
  }

  get front() {
    return this.length === 0 ? -1 : this.head.data;
  }

  get rear() {
    return this.length === 0 ? -1 : this.tail.data;
  }

  unshift(data) {
    const node = new Node(data);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }

  push(data) {
    const node = new Node(data);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  shift() {
    if (!this.head) return null;

    const node = this.head;
    this.head = node.next;
    if (this.head) this.head.prev = null;
    else this.tail = null;
    this.length--;

    return node.data;
  }

  pop() {
    if (this.head === null) {
      return null;
    }

    const node = this.tail;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = node.prev;
      this.tail.next = null;
    }
    this.length--;
    return node.data;
  }

  isEmpty() {
    return this.length === 0 ? 1 : 0;
  }

  searchIndexOf(data) {
    for (
      let current = this.head, index = 0;
      current !== null;
      current = current.next, ++index
    ) {
      if (current.data === data) {
        return index;
      }
    }
    return -1;
  }

  searchBy(index) {
    if (index < 0 || index >= this.length) return null;

    let current;
    if (index <= this.length / 2) {
      current = this.head;
      for (let i = 0; i < index; ++i) {
        current = current.next;
      }
    } else {
      current = this.tail;
      for (let i = this.length - 1; i > index; --i) {
        current = current.prev;
      }
    }

    return current;
  }

  popAt(index) {
    if (index < 0 || index >= this.length) return null;

    if (index === 0) {
      return this.shift();
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    const node = this.searchBy(index);
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.length--;
    return node.data;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  reverse() {
    let currentNode = this.head;
    let prevNode = null;
    let nextNode = null;
    while (currentNode) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      currentNode.prev = nextNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    this.tail = this.head;
    this.head = prevNode;
  }
}

export default Deque;

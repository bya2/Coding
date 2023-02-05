class Node {
  data;
  next = null;
  prev = null;

  constructor(data) {
    this.data = data;
  }
}

export default class Queue {
  head = null;
  tail = null;
  length = 0;

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

  pop() {
    if (this.head === null) {
      return -1;
    }

    const data = this.head.data;
    this.head = this.head.next;
    this.length--;

    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }

    return data;
  }

  front() {
    if (this.head === null) {
      return -1;
    }
    return this.head.data;
  }

  back() {
    if (this.tail === null) {
      return -1;
    }
    return this.tail.data;
  }

  empty() {
    return this.length === 0 ? 1 : 0;
  }

  size() {
    return this.length;
  }
}

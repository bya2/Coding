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

  front() {
    return this.length === 0 ? -1 : this.head.data;
  }

  back() {
    return this.length === 0 ? -1 : this.tail.data;
  }

  size() {
    return this.length;
  }

  push_front(data) {
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

  push_back(data) {
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

  pop_front() {
    if (!this.head) return -1;

    const node = this.head;
    this.head = node.next;
    if (this.head) this.head.prev = null;
    else this.tail = null;
    this.length--;

    return node.data;
  }

  pop_back() {
    if (this.head === null) {
      return -1;
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

  empty() {
    return this.length === 0 ? 1 : 0;
  }
}

export const solution = (inputs = [""]) => {
  inputs.shift();
  const queue = new Deque();
  const arr = [];
  for (const input of inputs) {
    const [cmd, value] = input.split(" ");
    switch (cmd) {
      case "push_front":
      case "push_back":
        queue[cmd](value);
        break;
      default:
        arr.push(queue[cmd]());
    }
  }
  return arr.join("\n");
};

export const examples = [
  {
    inputs: `15
    push_back 1
    push_front 2
    front
    back
    size
    empty
    pop_front
    pop_back
    pop_front
    size
    empty
    pop_back
    push_front 3
    empty
    front`,
    answer: `2
    1
    2
    0
    2
    1
    -1
    0
    1
    -1
    0
    3`,
  },
];

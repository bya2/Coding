class Node {
  data;
  prev;
  next;

  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class Heap {
  #head;
  #tail;
  #compare;

  constructor(comparator = (d1, d2) => d1 > d2) {
    this.#head = null;
    this.#tail = null;
    this.#compare = comparator;
  }

  *[Symbol.iterator]() {
    for (let node = this.#head; node !== null; node = node.next)
      yield node.value;
  }

  get length() {
    let count = 0;
    for (let node = this.#head; node !== null; node = node.next) count++;
    return count;
  }

  swap(node1, node2) {
    const tmp = node1.value;
    node1.value = node2.value;
    node2.value = tmp;
  }

  priorChildOf(node) {
    const leftChild = node.next;
    const rightChild = leftChild !== null ? leftChild.next : null;
    return rightChild !== null &&
      this.#compare(rightChild.value, leftChild.value)
      ? rightChild
      : leftChild;
  }

  _heapifyUp() {
    
  }
}

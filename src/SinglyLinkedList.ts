class Node<D = any> {
  data: D | null;
  next: Node<D> | null = null;

  constructor(data: D) {
    this.data = data;
  }
}

export class SinglyLinkedList<D = any> {
  head: Node<D> | null = null;
  tail: Node<D> | null = null;
  _size: number = 0;

  get size() {
    return this._size;
  }

  append(data: D) {
    // 마지막 노드 추가
    let node = new Node(data);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      let curr = this.head;
      while (curr.next) curr = curr.next;
      curr.next = node;
    }

    ++this._size;
  }

  remove() {}
}

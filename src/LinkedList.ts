class Node<D = any> {
  data: D;
  next: Node<D> | null = null;

  constructor(data: D) {
    this.data = data;
  }
}

export class LinkedList {

}
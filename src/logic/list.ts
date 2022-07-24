export class List<V = any> {
  data: V[];
  constructor(data: V[]) {
    this.data = data;
  }

  get size() {
    return this.data.length;
  }

  insert(el: V, index: number) {
    this.data.splice(index, 0, el);
  }

  replace(el: V, index: number) {
    this.data.splice(index, 1, el);
  }

  delete(index: number) {
    this.data.splice(index, 1);
  }
}

export class Queue<V = any> extends List<V> {
  get front() {
    return this.data[0];
  }

  get rear() {
    return this.data[this.size - 1];
  }

  enqueue(data: V) {
    this.data.push(data);
  }

  dequeue(): V | null {}
}

export class Stack<D = any> extends List<D> {
  get peek() {
    return this.data[this.size - 1];
  }

  push(data) {
    super(data);
  }

  pop() {}
}

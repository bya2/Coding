export class List<E = any> {
  data: E[];

  constructor(data: E[]) {
    this.data = data;
  }

  get size() {
    return this.data.length;
  }

  isEmpty() {
    return this.data.length === 0;
  }

  insert(element: E, index: number) {
    this.data.splice(index, 0, element);
  }

  replace(element: E, index: number) {
    this.data.splice(index, 1, element);
  }

  delete(index: number) {
    this.data.splice(index, 1);
  }

  compare(index1: number, index2: number): boolean {
    return this.data[index1] < this.data[index2];
  }

  swap(index1: number, index2: number) {
    [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]];
  }

  mix(seed: number) {
    this.data.sort(() => Math.random() - seed);
  }

  print() {
    console.log(`DATA:${this.data}\nSIZE:${this.size}`);
  }
}

export class Queue<E = any> extends List<E> {
  get front(): E {
    return this.data[0];
  }

  get rear(): E {
    return this.data[this.data.length - 1];
  }

  enqueue(element: E) {
    this.data.push(element);
  }

  dequeue(): E | null {
    return this.data.shift() || null;
  }
}

export class Stack<E = any> extends List<E> {
  get peek() {
    return this.data[this.data.length - 1];
  }

  push(element: E) {
    this.data.push(element);
  }

  pop(): E | null {
    return this.data.pop() || null;
  }
}

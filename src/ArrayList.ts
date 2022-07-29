export class ArrayList<E = any> {
  data: E[];

  constructor(elements: E[]) {
    this.data = elements;
  }

  get size() {
    return this.data.length;
  }

  insert(index: number, ...elements: E[]) {
    this.data.splice(index, 0, ...elements);
  }

  delete(index: number, count = 1) {
    this.data.splice(index, count);
  }

  replace(index: number, ...elements: E[]) {
    this.data.splice(index, elements.length, ...elements);
  }
}

export class ArrayQueue<E = any> extends ArrayList<E> {
  get front() {
    return this.data[0];
  }

  set front(element: E) {
    this.data[0] = element;
  }

  get rear() {
    return this.data[this.data.length - 1];
  }

  set rear(element: E) {
    this.data[this.data.length - 1] = element;
  }

  enqueue(element: E) {
    this.data.push(element);
  }

  dequeue() {
    return this.data.shift();
  }
}

export class ArrayStack<E = any> extends ArrayList<E> {
  get peek() {
    return this.data[this.data.length - 1];
  }

  push(element: E) {
    this.data.push(element);
  }

  pop() {
    return this.data.pop();
  }
}

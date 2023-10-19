const ERR_LENGTH = "The length of the heap is less than zero.";

interface ImplResult<T> {
  isEmpty(): boolean;
  has(item: T): boolean;
  hasAt(index: number): boolean;
}

interface ImplClone<T> {
  clone(self: T): T;
  cloneFrom(self: T, source: T): void;
}

interface ImplBinaryTree {}

// interface ImplBinaryHeap<T> {
//   push(item: T): void;
//   pop(): T;
//   siftUp(start: number, pos: number): number;
//   siftDownRange(pos: number, end: number): void;
//   siftDown(pos: number): void;
//   siftDownToBottom(pos: number): void;
//   rebuildTail(start: number): void;
//   rebuild(): void;
//   append(other: ThisType<T>): void;
// }

interface ImplBinaryHeap<T> {
  push(item: T): void;
  pop(): T | null;
  siftUp(start: number, pos: number): number;
}

interface IBinaryHeap<T> {}

class BinaryHeap<T> implements ImplBinaryHeap<T> {
  data: T[];
  length: number;

  constructor() {}

  pop(): T | null {
    if (this.length < 0) throw new Error(ERR_LENGTH);
  }

  siftUp(start: number, pos: number): number {
    throw new Error("Method not implemented.");
  }

  push(item: T): void {
    const oldLen = this.length;
    this.data.push(item);
    try {
      this.siftUp(0, oldLen);
    } catch (err) {
      console.log("BinaryHeap push method");
      throw new Error(err);
    }
  }
}

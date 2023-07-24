class SinglyLinkedList {
  #head = null;
  #tail = null;
  #size = 0;

  constructor(node) {
    if (typeof node !== "undefined") {
      this.#head = node;
      this.#tail = node;
      this.#size = 1;
    }
  }

  get head() {
    return this.#head;
  }

  get tail() {
    return this.#tail;
  }

  get size() {
    return this.#size;
  }

  findIndex(i) {
    if (i < 0 || i > this.#size) throw new Error();

    
  }
}

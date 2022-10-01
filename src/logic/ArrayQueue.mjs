import Arr from "./Array.mjs";

export default class ArrQueue extends Arr {
  get front() {
    return this[0];
  }

  get rear() {
    return this[this.length - 1];
  }

  enqueue = this.push;

  dequeue = this.shift;
}
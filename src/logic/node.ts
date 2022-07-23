import { noop } from "@/misc/util";

export class Node<D = any> {
  data: D;
  _marked: boolean = false;

  constructor(data: D) {
    this.data = data;
  }

  get marked() {
    return this._marked;
  }

  mark(cb: Function = noop) {
    this._marked = true;
    cb();
  }
}
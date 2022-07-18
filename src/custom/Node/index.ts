import { noop } from "@/misc/util";
import Entity from "../Entity";

export default class Node<D = any> extends Entity {
  data: D;
  _marked: boolean = false;

  constructor(data: D) {
    super();
    this.data = data;
  }

  get marked() {
    return this._marked;
  }

  set marked(input) {
    this._marked = input;
  }

  mark(cb: Function, args: any[] = []) {
    this._marked = true;
    (cb || noop)(...args);
  }
}

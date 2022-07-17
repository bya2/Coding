import { Entity } from ".";

interface NodeInterface<D> {

}

export default class Node<D = any> extends Entity implements NodeInterface<D>{
  protected _data: D;
  protected _marked: boolean;

  constructor(data: D) {
    super();
    this._data = data;
    this._marked = false;
  }

  get data() {
    return this._data;
  }

  get marked() {
    return this._marked;
  }

  set data(input) {
    this._data = input;
  }

  set marked(input) {
    this._marked = input;
  }
}
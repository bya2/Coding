interface ListInterface<E> {}

export default class List<E = any> implements ListInterface<E> {
  protected _data: E[];

  constructor(list: E[] = []) {
    this._data = list;
  }

  get data() {
    return this._data;
  }

  get size() {
    return this._data.length;
  }

  set data(input) {
    this._data = input;
  }

  isEmpty(): boolean {
    return this._data.length === 0;
  }

  insert(el: E, index: number) {
    this._data.splice(index, 0, el);
  }

  replace(el: E, index: number) {
    this._data.splice(index, 1, el);
  }

  delete(index: number) {
    this._data.splice(index, 1);
  }

  compare(index1: number, index2: number): boolean {
    return this._data[index1] < this._data[index2];
  }

  swap(index1: number, index2: number) {
    [this._data[index1], this._data[index2]] = [this._data[index2], this._data[index1]];
  }

  mix(seed: number = 0.5): void {
    this._data.sort(() => Math.random() - seed);
  }

  print() {
    console.log(`DATA:${this._data}\nSIZE:${this.size}`);
  }
}

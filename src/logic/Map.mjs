export default class M extends Map {
  increase(value) {
    this.set(value, this.has(value) ? this.get(value) + 1 : 1);
  }
}
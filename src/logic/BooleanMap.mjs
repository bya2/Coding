export default class BMap extends Map {
  on(key) {
    this.set(key, true);
  }

  off(key) {
    this.set(key, false);
  }

  toggle(key) {
    this.has(key) && this.set(key, !this.get(key));
  }

  static from(arr = []) {
    const map = new BMap();
    if (arr instanceof Array) for (const el of arr) map.off(el);
    return map;
  }
}

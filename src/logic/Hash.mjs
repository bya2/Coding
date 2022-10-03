export default class Hash extends Map {
  static fromArray(array = []) {
    const map = new Hash();
    if (array instanceof Array) {
      for (let curr of array) {
        map.set(curr, map.has(curr) ? map.get(curr) + 1 : 1);
      }
    }
    return map;
  }
}

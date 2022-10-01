import Arr from "./Array.mjs";

export default class Tuple extends Set {
  static fromString(s) {
    return s.match(/(\d+,)*\d+/g).map((s) => s.split(",").map((n) => +n));
  }

  static getTupleFromParts(arrGrid = [[]]) {
    const set = new Set();

    for (let i = 0, len = arrGrid.length; i < len; ++i) {
      for (let element of arrGrid[i]) {
        if (!set.has(element)) {
          set.add(element);
          break;
        }
      }
    }

    return set;
  }
}

export default class Tuple {
  constructor() {}

  static preprocessFrom(s = "") {
    return s.match(/(\d+,)*\d+/g).map((s) => s.split(",").map((n) => +n));
  }

  static getTupleFromParts(d2Arr = [[]]) {
    let set = new Set();

    for (let i = 0, len = d2Arr.length; i < len; ++i) {
      for (let element of d2Arr[i]) {
        if (!set.has(element)) {
          set.add(element);
          break;
        }
      }
    }

    return [...set];
  }
}

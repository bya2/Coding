export default class Arr extends Array {
  get last() {
    return this[this.length - 1];
  }

  // 질문
  isEmpty() {
    return this.length === 0;
  }

  has(at) {
    return this.length >= at && typeof this[at] !== "undefined";
  }

  // 동작
  insert(o, at) {
    this.splice(at, 0, o);
  }

  replace(o, at) {
    this.splice(at, 1, o);
  }

  delete(at) {
    this.splice(at, 1);
  }

  swap(index1, index2) {
    [this[index1], this[index2]] = [this[index2], this[index1]];
  }

  compare(index1, index2) {
    return this[index1] < this[index2];
  }

  print() {
    console.log(`DATA: ${this}\nLENGTH: ${this.length}`);
  }

  static union(arr1, arr2) {}

  static intersection(arr1, arr2) {}
}

Object.defineProperty(Array.prototype, "isInOrderOf", {
  value: function (arr_permutation) {
    for (let i = 0, len = this.length; i < len; ++i) {
      if (!arr_permutation.includes(this[i]) || this[i] === arr_permutation.shift()) continue;
      return false;
    }
    return true;
  },
});

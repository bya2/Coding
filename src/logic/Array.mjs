export default class Arr extends Array {
  get last() {
    return this[this.length - 1];
  }

  isEmpty() {
    return this.length === 0;
  }

  isInOrderWith(permutation = []) {
    for (let i = 0, len = this.length; i < len; ++i) {
      if (!permutation.includes(this[i]) || this[i] === permutation.shift()) continue;
      return false;
    }
    return true;
  }

  has(at) {
    return this.length >= at && typeof this[at] !== "undefined";
  }

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

  // 필터링
  // - 값보다 적은 갯수를 가지고 있는 단어들을 리턴
  filterLessThan(number) {
    const mapOfDup = new Map();
    return this.filter((el) => {
      if (mapOfDup.get(el) >= number) return false;
      mapOfDup.set(el, mapOfDup.has(el) ? mapOfDup.get(el) + 1 : 1);
      return true;
    });
  }

  // - 값보다 큰 갯수를 가지고 있는 단어들을 리턴
  filterMoreThan(number) {
    const mapOfDup = new Map();
    return this.filter((el) => {
      if (mapOfDup.get(el) <= number) return false;
      mapOfDup.set(el, mapOfDup.has(el) ? mapOfDup.get(el) - 1 : -1);
      return true;
    });
  }

  static union(arr1, arr2) {}

  static intersection(arr1, arr2) {}
}

// Object.defineProperty(Array.prototype, "isInOrderOf", {
//   value: function (arr_permutation) {
//     for (let i = 0, len = this.length; i < len; ++i) {
//       if (!arr_permutation.includes(this[i]) || this[i] === arr_permutation.shift()) continue;
//       return false;
//     }
//     return true;
//   },
// });

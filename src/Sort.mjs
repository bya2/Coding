export class NumberArraySort {
  static inAsc(arr) {
    arr.sort((a, b) => a - b);
  }

  static inDesc(arr) {
    arr.sort((a, b) => b - a);
  }
}

export class StringArraySort {
  static byIndex(arr, index) {
    arr.sort((a, b) => {
      if (a[n] > b[n]) return 1;
      else if (a[n] < b[n]) return -1;
      else return a > b ? 1 : -1;
    });
  }

  static byIndex2(arr, index) {
    arr.sort((a, b) => (a[index] === b[index] ? a.localeCompare(b) : a[index].localeCompare(b[index])));
  }

  static getSortedListByIndex(arr, index) {
    return arr
      .map((s) => [...s][index] + s)
      .sort()
      .map((s) => s.substring(1));
  }
}

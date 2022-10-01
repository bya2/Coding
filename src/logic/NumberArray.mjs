import Arr from "./Array.mjs";

export default class NArr extends Arr {
  // 질문

  // 행과 열 중 더 큰 인덱스의 값을 가지는 행렬에서 index1부터 index2까지 자르기 (cost부터 시작하는 인덱스)
  sliceFromSerializedMatrix(n, index1, index2, cost = 1) {
    for (let i = index1; i <= index2; ++i) {
      this.push(Math.max(i % n, (i / n) >> 0) + cost);
    }
  }

  // 정렬
  sortByValueInAsc() {
    this.sort((a, b) => a - b);
  }

  sortByValueInDesc() {
    this.sort((a, b) => b - a);
  }

  // 평준화
  // 하향 평준화 (비용 만큼 배열의 값을 빼기)
  downgrade(cost = 0) {
    this.sortByValueInDesc();

    while (cost && this[0]) {
      for (let i = 0, len = this.length; cost && i < len; ++i) {
        if (this[i] >= this[0]) {
          --cost;
          --this[i];
        } else {
          break;
        }
      }
    }
  }

  // 계산
  getSum() {
    return this.reduce((a, b) => a + b, 0);
  }

  getSumOfSquares() {
    return this.reduce((a, b) => a + Math.pow(b, 2), 0);
  }

  getAvg() {
    return this.getSum() / this.length;
  }

  getMaximumAndMinimum() {
    return [Math.max(...this), Math.min(...this)];
  }

  getHIndex() {
    this.sortByValueInDesc();
    let i = 0;
    while (i + 1 <= this[i]) ++i;
    // for (i = 0; i + 1 <= this[i]; ++i) {}
    return i;
  }

  static range(a, b) {
    if (typeof b === "undefined") [a, b] = [0, a];
    const arr = new NArr();
    for (; a < b; a++) arr.push(a);
    return arr;
  }
}

import Arr from "./Array.mjs";

export default class NArr extends Arr {
  // 질문

  // 경우의 수
  numberOfCases() {
    return this.reduce((acc, el) => acc * (el + 1), 1);
  }

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
    return this.reduce((acc, el) => acc + el, 0);
  }

  getSumOfSquares() {
    return this.reduce((acc, el) => acc + Math.pow(el, 2), 0);
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

  // 높이, 밑변의 길이가 n인 삼각형 순서의 숫자 배열 (시작 1)
  // 반시계 방향
  static sortedByCCWTri(length) {
    const arr = Array.from({ length }, (_, i) => Array(i + 1).fill(0));

    for (let [num, row, col, val] = [length, -1, 0, 0]; num > 0; num -= 3) {
      for (let i = 0; i < num; ++i) {
        arr[++row][col] = ++val;
      }

      for (let [i, len] = [0, num - 1]; i < len; ++i) {
        arr[row][++col] = ++val;
      }

      for (let [i, len] = [0, num - 2]; i < len; ++i) {
        arr[--row][--col] = ++val;
      }
    }

    return [].concat(...arr);
  }
}

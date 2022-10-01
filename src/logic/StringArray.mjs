import Arr from "./Array.mjs";

export default class SArr extends Arr {
  // 정렬
  sortByLengthInAsc() {
    this.sort((a, b) => a.length - b.length);
  }

  sortByLengthInDesc() {
    this.sort((a, b) => b.length - a.length);
  }
}

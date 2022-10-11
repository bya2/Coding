export default class NMap extends Map {
  // 증감
  increase(key, value = 1) {
    return this.set(key, this.has(key) ? this.get(key) + value : value);
  }

  decrease(key, value = 1) {
    this.set(key, this.has(key) ? this.get(key) - value : -value);
  }

  // 산술
  add(...keys) {
    return keys.reduce((acc, key) => acc + this.get(key), 0);
  }

  subtract(...keys) {
    const [el, arr] = keys;
    return arr.reduce((acc, key) => acc - this.get(key), el);
  }

  // 배열 간 비교: 다른 요소 여부 및 얻기
  getDiffElement(arr = []) {
    return arr.find((el) => {
      if (this.get(el) > 0) this.decrease(el);
      else return true;
    });
  }

  // 경우의 수
  numberOfCases() {
    return [...this.values()].reduce((acc, n) => acc * (n + 1), 1);
  }

  // 생성
  static from(arr) {
    const map = new NMap();
    if (arr instanceof Array) for (let el of arr) map.increase(el);
    return map;
  }
}

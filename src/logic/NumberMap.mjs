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

  /**
   * 범위 내 요청
   * - Lv2. 할인 행사
   * @param elements: 요청 가능한 요소 목록
   * @param scopes: 첫 매개변수 배열에서 한 번에 요청할 수 있는 인덱스 범위 크기
   * @return 유효한 요청 갯수 or 유효한 범위 갯수(크기)
   */
  requestInScope(elements, scopes) {
    if (elements.length < scopes) return 0;

    let validScopes = elements.length - scopes + 1;
    let requests = [...this.keys()];
    const numMap = NMap.from(elements.slice(0, scopes));

    // 요소를 요청한 갯수보다 요청 가능한 요소의 갯수가 적으면,
    // - 유효 요청 갯수 감소
    // - 해당 인덱스에 있는 요소를 맨 앞으로
    const compare = () => {
      for (let i = 0, len = requests.length; i < len; ++i) {
        if ((this.get(requests[i]) ?? 0) > (numMap.get(requests[i]) ?? 0)) {
          --validScopes;
          i !== 0 && (requests = [requests[i], ...(requests.splice(i, 1), requests)]);
          break;
        }
      }
    };

    compare();
    for (let i = scopes, len = elements.length; i < len; ++i) {
      numMap.increase(elements[i]);
      numMap.decrease(elements[i - scopes]);
      compare();
    }

    return validScopes;
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

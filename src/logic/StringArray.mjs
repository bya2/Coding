import Arr from "./Array.mjs";

export default class SArr extends Arr {
  // 정렬
  sortByLengthInAsc() {
    this.sort((a, b) => a.length - b.length);
  }

  sortByLengthInDesc() {
    this.sort((a, b) => b.length - a.length);
  }

  /**
   * 문자들을 'length'의 길이로 조합
   * @param length 조합될 길이
   * @returns 조합된 문자 배열
   */
  getCombinationsBy(length) {
    let combinations = [];

    const cb = (acc, index) => {
      if (acc.length === length) {
        combinations.push(acc.join(""));
        return;
      }

      for (let i = index, len = this.length; i < len; ++i) {
        cb([...acc, this[i]], i + 1);
      }
    };

    cb([], 0);
    return combinations;
  }

  /**
   * 문자들을 'length'의 길이로 조합하고 해쉬에 추가
   * @param length 조합될 길이
   * @returns 조합된 문자들의 갯수 해쉬
   */
  increaseCombsTo(map, length) {
    const cb = (acc, index) => {
      if (acc.length === length) {
        const comb = acc.join("");
        map.set(comb, (map.get(comb) || 0) + 1);
        return;
      }

      for (let i = index, len = this.length; i < len; ++i) {
        cb([...acc, this[i]], i + 1);
      }
    };

    cb([], 0);
    return map;
  }
}

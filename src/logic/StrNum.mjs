import Stack from "./ArrayStack.mjs";

export default class StrNum extends String {
  /**
   * 여러 숫자를 삭제해서 가장 큰 수 생성
   * @param number 숫자의 문자열
   * @param deleteCount 삭제할 숫자 갯수
   * @returns 가장 큰 수의 문자열
   */
  static maximumOf(number = "", deleteCount = 0) {
    const arrStack = new Stack();

    arrStack.push(number[0]);
    for (let i = 1, len = number.length; i < len; ++i) {
      const item = number[i];
      while (arrStack.peek < item) {
        --deleteCount;
        arrStack.pop();
        if (deleteCount === 0) return arrStack.join("") + number.slice(i, number.length);
        if (arrStack.length === 0) break;
      }
      arrStack.push(item);
    }

    return arrStack.join("").slice(0, number.length - deleteCount);
  }
}

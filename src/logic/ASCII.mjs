export default class ASCII extends Number {
  // 질문
  isUpperCaseCode() {
    return this >= 65 && this <= 90;
  }

  isLowerCaseCode() {
    return this >= 97 && this <= 122;
  }
}

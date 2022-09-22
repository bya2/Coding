export class Str extends String {
  // 질문
  static isLowerCaseCode(code) {
    return code >= 97 && code <= 122;
  }

  static isUpperCaseCode(code) {
    return code >= 65 && code <= 90;
  }

  // 동작
  convertCapitalSentence() {
    const words = this.toLowerCase().split(" ");

    for (let i = 0, len = words.length; i < len; ++i) {
      if (words[i].length === 0) continue;
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    return words.join(" ");
  }

  getCenter() {
    return this.substring(Math.ceil(this.length / 2) - 1, this.length % 2 === 0 ? 2 : 1);
  }

  가운데문자(s = "") {
    return s.substring(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
  }

  isLowerCaseCode(code) {
    return code >= 97 && code <= 122;
  }

  isOddNumberOfDivisors(n) {
    return Number.isInteger(Math.sqrt(n));
  }
}

export class ASCIICode extends Number {
  // 질문
  isUpperCaseCode() {
    return this >= 65 && this <= 90;
  }

  isLowerCaseCode() {
    return this >= 97 && this <= 122;
  }
}

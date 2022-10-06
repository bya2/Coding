export default class S extends String {
  // 변환
  // - 앞문자가 대문자
  static convertCapitalSentence(s = "") {
    const words = s.toLowerCase().split("");
    for (let i = 0, len = words.length; i < len; ++i) {
      if (words[i].length === 0) continue;
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
  }

  // - 배열 튜플
  static convertTuple(s = "") {
    return s.match(/(\d+,)*\d+/g).map((s) => s.split(",").map((n) => +n));
  }

  // 가운데 값 GETTER (홀수 1개, 짝수 2개)
  static middle(s = "") {
    return s.substring(Math.ceil(this.length / 2) - 1, this.length % 2 === 0 ? 2 : 1);
  }
}

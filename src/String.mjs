export class CustomString {
  convertCapitalSentence(s = "") {
    s = s.toLowerCase();

    const words = s.split(" ");

    for (let i = 0; i < words.length; ++i) {
      if (words[i] === "") continue;
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    return words.join(" ");
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

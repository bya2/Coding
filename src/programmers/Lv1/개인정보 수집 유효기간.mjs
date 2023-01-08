export class D extends Date {
  /**
   * @param {number} value
   */
  increaseYear(value = 1) {
    return this.setFullYear(this.getFullYear() + value);
  }

  /**
   * @param {number} value
   */
  decreaseYear(value = 1) {
    return this.setFullYear(this.getFullYear() + value);
  }

  /**
   * @param {number} value
   */
  increaseMonth(value = 1) {
    return this.setMonth(this.getMonth() + value);
  }

  /**
   * @param {number} value
   */
  decreaseMonth(value = 1) {
    return this.setMonth(this.getMonth() - value);
  }

  /**
   * @param {number} value
   */
  increaseDay(value = 1) {
    return this.setDate(this.getDate() + value);
  }

  /**
   * @param {number} value
   */
  decreaseDay(value = 1) {
    return this.setDate(this.getDate() - value);
  }
}

/**
 * @param {string} today "현재날짜"
 * @param {string[]} terms "약관종류 유효기간"[]
 * @param {string[]} privacies "개인정보수집일자 약관종류"[]
 * @returns {number[]}
 */
export function solution(today, terms, privaices) {
  const list = [];

  today = new Date(today);

  const dict = terms.reduce((obj, s) => {
    const [type, term] = s.split(" ");
    obj[type] = +term;
    return obj;
  }, {});

  privaices.forEach((pri, i) => {
    const [date, type] = pri.split(" ");
    const v = new Date(date);
    v.setMonth(v.getMonth() + dict[type]);
    if (v <= today) list.push(i + 1);
  });

  return list;
}

/**
 * 개인정보 수집 유효기간
 *
 * - 모든 달은 28일까지
 * -
 * @param {string} today "현재날짜"
 * @param {string[]} terms "약관종류 유효기간"[]
 * @param {string[]} privacies "개인정보수집일자 약관종류"[]
 * @returns {number[]}
 */
export function solution2(today, terms, privacies) {
  var answer = [];

  let [year, month, day] = today.split(".").map((x) => +x);
  day++;
  if (day === 29) {
    month++;
    day = 1;
    if (month === 13) {
      year++;
      month = 1;
    }
  }

  // console.log(year, month, day);

  const dict = terms.reduce((dict, s) => {
    const [type, term] = s.split(" ");
    dict[type] = +term;
    return dict;
  }, {});

  for (let i = 0, len = privacies.length; i < len; ++i) {
    const pri = privacies[i];
    const [date, type] = pri.split(" ");

    let [yyyy, mm, dd] = date.split(".").map((x) => +x);

    const term = dict[type];
    mm += term;
    const rest = mm % 12;
    yyyy += ~~(mm / 12);
    mm %= 12;
    if (rest === 0) {
      yyyy--;
      mm = 12;
    }

    // console.log(`${i + 1}:`, yyyy, mm, dd, type);

    if (yyyy > year) continue;
    if (yyyy === year && mm > month) continue;
    if (yyyy === year && mm === month && dd >= day) continue;

    answer.push(i + 1);
  }

  return answer;
}

export const examples__arr = [
  {
    today: "2022.05.19",
    terms: ["A 6", "B 12", "C 3"],
    privacies: ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"],
    answer: [1, 3],
  },
  {
    today: "2020.01.01",
    terms: ["Z 3", "D 5"],
    privacies: [
      "2019.01.01 D",
      "2019.11.15 Z",
      "2019.08.02 D",
      "2019.07.01 D",
      "2018.12.28 Z",
    ],
    answer: [1, 4, 5],
  },
];

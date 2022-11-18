class Divisor {
  static setOf(_number) {
    const set = new Set();
    for (let i = 1, len = _number / 2; i <= len; ++i) if (_number % i === 0) set.add(i);
    set.add(_number);
    return set;
  }
}

/**
 * 기사단원의 무기
 * @param {number} number 기사단원의 수
 * @param {number} limit 공격력의 제한수치
 * @param {number} power 제한수치를 초과한 기사가 사용할 무기의 공격력을 나타내는 정수
 * @return {number} 필요한 철의 무게
 */
export const solution = (number, limit, power) => {
  let weight = 0;
  for (let i = 1; i <= number; ++i) {
    const nOf = Divisor.setOf(i).size;
    if (nOf > limit) {
      weight += power;
    } else {
      weight += nOf;
    }
    // console.log(i, nOf);
  }
  return weight;
};

export const examples__arr = [
  {
    number: 5,
    limit: 3,
    power: 2,
    answer: 10,
  },
  {
    number: 10,
    limit: 3,
    power: 2,
    answer: 21,
  },
];

export default class Bit {
  // 1의 갯수
  static numberOfOnes(number = 0) {
    return [...number.toString(2)].filter((b) => b === 1).length;
    // return n.toString(2).replace(/0/g, "").length;
  }

  // x보다 큰 다음 수
  // 비트가 1~2개 다른 수
  static nextBigNumber_withOneToTwoOtherBits(number) {
    if (number < 2 || number & 0) return ++number;
    else {
      for (let c = 2, larger = number + 1; ; ) {
        if (larger % (c *= 2) !== 0) return number + c / 4;
        // if (m % (c * 2) === 0) c *= 2;
        // else return number + c / 2;
      }
    }
  }

  // x보다 큰 다음 수
  // 비트 1의 갯수가 같은 수
  static nextBigNumber_withSameNumberOfOne(n) {
    let shifts = 0,
      ones = 0;
    for (; !(n & 1); ++shifts) {
      n = n >> 1;
    }
    for (; n & 1; ++shifts, ++ones) {
      n = n >> 1;
    }
    for (ones--, n++; shifts !== ones; --shifts) {
      n = n << 1;
    }
    for (; shifts; shifts--, n++) {
      n = n << 1;
    }
    return n;
  }

  // 0부터 n까지 도달에 필요한 1더하기의 갯수
  // 1더하기, 2곱하기
  // -> 비트의 1의 갯수
  static numberOfOnesToAddUpTo(number) {
    let jump = 0;
    for (; number > 0; ++jump) number &= number - 1;
    // while (number > 0) {
    //   number &= number - 1;
    //   ++jump;
    // }

    return jump;
  }
}

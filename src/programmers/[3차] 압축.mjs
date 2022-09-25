export const solution = (msg = "") => {
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const map = [null, ...alphabets.split("")].reduce((map, t, i) => (map.set(t, i), map), new Map());

  const arr = [];
  let maxLv = 1;
  let nextIdx = alphabets.length + 1;
  for (let i = 0, j, len = msg.length; i < len; i += j, ++nextIdx) {
    // 문자열 검색
    let s;
    for (j = maxLv; j >= 1; --j) {
      s = msg.slice(i, i + j);
      ``;
      if (map.has(s)) {
        if (j === maxLv) ++maxLv;
        arr.push(map.get(s));
        break;
      }
    }

    // 사전 추가
    map.set(s + msg[i + j], nextIdx);
  }

  return arr;
};

// 압축 알고리즘
// Lempel-Ziv-Welch
// 이미지 파일 포맷인 GIF 등에 응용
export const LZW = () => {};

export const examples__arr = [
  {
    msg: "KAKAO",
    answer: [11, 1, 27, 15],
  },
  {
    msg: "TOBEORNOTTOBEORTOBEORNOT",
    answer: [20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34],
  },
  {
    msg: "ABABABABABABABAB",
    answer: [1, 2, 27, 29, 28, 31, 30],
  },
];

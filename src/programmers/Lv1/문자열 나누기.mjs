/**
 * 문자열 나누기
 * - 1. 문자열의 첫 글자 읽기. 글자=x
 * - 2. 오른쪽 방향으로 읽어가면서 x의 개수, x가 아닌 개수를 세다가 두 횟수가 같아지면 멈추고 지금까지 읽은 문자열을 분리
 * - 3. 분리한 문자열을 빼고, 남은 부분 1-2번 반복
 * @param {string} s
 */
export const solution = (s) => {
  let count = 0;
  let bi = 0;
  while (1) {
    let flag = 0;
    const counts = [1, 0];
    const x = s[bi];
    for (let i = bi + 1, len = s.length; i < len; ++i) {
      if (x === s[i]) counts[0]++;
      else counts[1]++;

      if (counts[0] === counts[1]) {
        count++;
        bi = i + 1;
        flag++;
        break;
      }
    }

    if (!flag) break;
  }

  if (bi !== s.length) count++;
  return count;
};

export const examples__arr = [
  {
    s: "banana",
    answer: 3,
  },
  {
    s: "abracadabra",
    answer: 6,
  },
  {
    s: "aaabbaccccabba",
    answer: 3,
  },
];

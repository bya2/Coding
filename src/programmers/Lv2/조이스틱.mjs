/**
 * 조이스틱으로 이름을 완성하기 위한 조작 횟수의 최솟값 리턴
 * U - 다음 알파벳
 * D - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로)
 * L - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
 * R - 커서를 오른쪽으로 이동 (마지막 위치에서 오른쪽으로 이동하면 첫 번째 문자에 커서)
 * @param {string} name
 */
export const solution = (name) => {
  let udAcc = 0;
  let lrAcc = name.length - 1;

  for (let i = 0, len = name.length; i < len; ++i) {
    let code = name.charCodeAt(i);

    // 위아래 조작 횟수
    if (code < 78) udAcc += code - 65;
    else udAcc += 91 - code;

    // 좌우 조작 후 다음 인덱스(연속된 A의 개수)
    let ni = i + 1;
    while (ni < name.length && name[ni] === "A") ++ni;

    // i*2 = 처음 위치로 돌아가는 횟수
    // lrAcc = Math.min(lrAcc, i * 2 + name.length - ni); //
    // lrAcc = Math.min(lrAcc, (name.length - ni) * 2 + i); // 뒤로 갔다가 되돌아오는 경우

    const left = i;
    const right = name.length - ni;
    lrAcc = Math.min(lrAcc, left <= right ? left * 2 + right : left + right * 2);
  }

  return udAcc + lrAcc;
};

// 위치 * 2 + 이름길이 - 다음 위치
// (이름길이 - 다음 위치) * 2 + 위치

export const fail_solution = (name) => {
  let arr = [0];
  let answer = 0;

  for (let i = 0; i < name.length; i++) {
    if (name[i] === "A") {
      if (i === 0) arr.push(repeatA(name) - 1);
      else if (name[i - 1] !== "A") arr.push(repeatA(name.slice(i)) - (i - 1));
      answer++;
    } else answer += upDownCount(name, i) + 1;
  }
  return answer - Math.max(...arr) - 1;
};

const getUpDownCount = (name, i) => {
  const alpabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const count = alpabets.indexOf(name[i]) < 13 ? alpabets.indexOf(name[i]) : 26 - alpabets.indexOf(name[i]);
  return count;
};

const repeatA = (name) => {
  let count = 0;
  for (let i = 0; i < name.length && name[i] === "A"; ++i, ++count) {}
  return count;
};

export const examples__arr = [
  {
    name: "JEROEN",
    answer: 56,
  },
  {
    name: "JAN",
    answer: 23,
  },
];

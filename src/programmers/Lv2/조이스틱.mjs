/**
 * 조이스틱으로 이름을 완성하기 위한 조작 횟수의 최솟값 리턴
 * U - 다음 알파벳
 * D - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로)
 * L - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
 * R - 커서를 오른쪽으로 이동 (마지막 위치에서 오른쪽으로 이동하면 첫 번째 문자에 커서)
 * @param {string} name
 */
export const solution = (name) => {
  let arr = [0];
  let answer = 0; // 움직인 횟수를 계속 누적해서 더해줄 것이다.

  for (let i = 0; i < name.length; i++) {
    // 문자열을 순차적으로 조회하면서 A를 만나면 앞으로 갈지 뒤로갈지를 고민해야한다.
    // 그래서 조회한 문자가 "A"일때와 아닐때로 나눈다.
    if (name[i] === "A") {
      if (i === 0) arr.push(repeatA(name) - 1); // 시작부터 A가 연속된다면 뒤로가는 것이 이득이다.
      // 중간에 "A"를 만났을 때 A앞의 문자열의 길이보다 연속되는 A의 길이가 길다면 이득보는 횟수만큼이 arr에 push될 것이다.
      else if (name[i - 1] !== "A") arr.push(repeatA(name.slice(i)) - (i - 1));
      answer++; // 기본적으로 우측으로 이동한 횟수를 더해주어야 한다. 마지막에 이득본 횟수만큼을 빼줄 것이기 때문.
    }
    //A가 아니면   알파벳 변환(위아래 이동한 수) + 우측 이동한 수
    else answer += upDownCount(name, i) + 1;
  }
  // Math.max(...arr)는 뒤로이동을 통해 최대로 이득을 본 횟수가 될 것이다.
  return answer - Math.max(...arr) - 1;
  // 마지막에 -1을 해주는 이유는 기본적으로 알파벳 변환을 해준뒤에 우측 이동한 수를 더해주는데,
  // 마지막 알파벳을 변환할 때 우측으로 이동할 필요가 없기 때문에 -1을 해주는 것이다.
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

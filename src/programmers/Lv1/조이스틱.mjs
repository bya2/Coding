const getCountOfUpDown = (name, i) => {
  const MIN = "A".charCodeAt(0);
  const MAX = "Z".charCodeAt(0);
  const HALF = (MAX + MIN) / 2;
  let code = name.charCodeAt(i);
  let count = code > HALF ? MAX - code + 1 : code - MIN;
  return count;
};

const getCountOfRepeatedCharacters = (str, target = "A") => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== target) break;
    count++;
  }
  return count;
};

export const solution = (name = "") => {
  // 위아래 처리
  // - 아스키 코드 값을 구하고, 더 가까운 쪽과의 차이를 구해서 더하기

  // 좌우 처리
  // - 맨 첫자리부터 "A"이면, 연속된 A의 갯수를 구하기
  // - 중간에 "A"를 만날 때마다, A 앞의 문자열의 길이보다 연속되는 A의 길이를 구하고, A 전의 문자열의 길이와 비교해서 차를 구하기

  let arr = [0];
  let sum = 0;

  for (let i = 0; i < name.length; ++i) {
    if (name[i] === "A") {
      if (i === 0) arr.push(getCountOfRepeatedCharacters(name) - 1);
      else if (name[i - 1] !== "A") arr.push(getCountOfRepeatedCharacters(name.slice(i)) - (i - 1));
      sum++;
    } else {
      sum += getCountOfUpDown(name, i) + 1;
    }
  }

  console.log(arr, sum);
  return sum - Math.max(...arr) - 1;
};

export const examples__arr = [
  {
    name: "JAZ",
    answer: 11,
  },
  {
    name: "JEROEN",
    answer: 56,
  },
  {
    name: "JAN",
    answer: 23,
  },
  {
    name: "JAAMAJAMMAAAKKKKEAAAZ",
    answer: 0,
  }
];

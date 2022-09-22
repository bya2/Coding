// 자카드 유사도: 집합 간의 유사도를 검사하는 여러 방법 중의 하나
// 집합 A, B 사이의 자카드 유사도 J(A, B)는 두 집합의 교집합 크기를 두 집합의 합집합 크기로 나눈 값
// 집합 A와 집합 B가 모두 공집합일 경우에는 나눗셈이 정의되지 않으니 따로 J(A, B) = 1로 정의
// RESULT = RESULT * 65536 >> 0;
export const solution = (s1 = "", s2 = "") => {
  s1 = s1.toUpperCase();
  s2 = s2.toUpperCase();

  const [map1, map2] = 두글자씩끊기(s1, s2);

  const inter = new Map();
  for (let key of map1.keys()) {
    if (map1.has(key) && map2.has(key)) inter.set(key, Math.min(map1.get(key), map2.get(key)));
  }
  const union = new Map();
  for (let key of [...new Set([...map1.keys(), ...map2.keys()])]) {
    union.set(key, Math.max(map1.get(key) || 0, map2.get(key) || 0));
  }

  if (union.size === 0) return 65536;
  else if (inter.size === 0) return 0;
  else {
    return ((sum([...inter.values()]) / sum([...union.values()])) * 65536) >> 0;
  }
};

const sum = (numbers = []) => numbers.reduce((a, b) => a + b, 0);

// 문자로 된 글자 쌍만 유효하고, 기타 공백이나 숫자, 특수 문자가 들어있는 경우는 그 글자 쌍을 버린다.
const 두글자씩끊기 = (s1, s2) => {
  const map1 = new Map();
  const map2 = new Map();

  for (let i = 0, len = Math.max(s1.length, s2.length) - 1; i < len; ++i) {
    let p1 = s1.slice(i, i + 2);
    let p2 = s2.slice(i, i + 2);
    check(p1) && map1.set(p1, map1.has(p1) ? map1.get(p1) + 1 : 1);
    check(p2) && map2.set(p2, map2.has(p2) ? map2.get(p2) + 1 : 1);
  }

  return [map1, map2];
};

const check = (s) => {
  return typeof s === "string" && s.replace(/[^A-Z]+/g, "").length >= 2;
};

export const 자카드유사도구하기 = () => {};

export const map간의합집합 = (map1, map2) => {};

export const map간의교집합 = () => {};

export const examples__arr = [
  {
    str1: "FRANCE",
    str2: "french",
    answer: 16384,
  },
  {
    str1: "handshake",
    str2: "shake hands",
    answer: 65536,
  },
  {
    str1: "aa1+aa2",
    str2: "AAAA12",
    answer: 43690,
  },
  {
    str1: "E=M*C^2",
    str2: "e=m*c^2",
    answer: 65536,
  },
];

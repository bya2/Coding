class NumMap extends Map {
  static intersection(map1, map2) {
    const numMap = new this();
    for (const key of map1.keys()) {
      if (map2.has(key)) {
        numMap.set(key, Math.min(map1.get(key), map2.get(key)));
      }
    }
    return numMap;
  }
}

/**
 * 짝궁: 공통으로 나타나는 정수들을 이용하여 만들 수 있는 가장 큰 정수
 * 짝궁을 리턴, 없으면 -1를 리턴
 * @param {string} X
 * @param {string} Y
 */
export const solution = (x, y) => {
  const map1 = new Map();
  const map2 = new Map();
  [...x].map((n) => map1.set(n, (map1.get(n) || 0) + 1));
  [...y].map((n) => map2.set(n, (map2.get(n) || 0) + 1));
  const map = NumMap.intersection(map1, map2);
  if (map.size) {
    if ([...map.keys()].filter((e) => e !== "0").length === 0) return "0";
    return [...map]
      .sort((a, b) => b[0] - a[0])
      .map(([k, v]) => k.repeat(v))
      .join("");
  } else {
    return "-1";
  }
};

export const fail_solution = (X, Y) => {
  const a = [...X].sort((a, b) => a - b);
  const b = [...Y].sort((a, b) => a - b);
  const list = [];

  while (a.length && b.length) {
    if (a[0] > b[b.length - 1] || b[0] > a[a.length - 1]) break;

    const diff = a[0] - b[0];
    if (diff === 0) {
      list.push(a[0]);
      a.shift();
      b.shift();
    } else if (diff > 0) {
      b.shift();
    } else {
      a.shift();
    }
  }

  if (list.length === 0) return "-1";
  else {
    if (list.findIndex((e) => e !== 0) === -1) return "0";
    return (
      list
        .map((e) => +e)
        .sort((c, d) => d - c)
        .join("") *
        1 +
      ""
    );
  }
};

export const examples__arr = [
  {
    X: "100",
    Y: "2345",
    answer: "-1",
  },
  {
    X: "100",
    Y: "203045",
    answer: "0",
  },
  {
    X: "100",
    Y: "123450",
    answer: "10",
  },
  {
    X: "12321",
    Y: "42531",
    answer: "321",
  },
  {
    X: "5525",
    Y: "1255",
    answer: "552",
  },
];

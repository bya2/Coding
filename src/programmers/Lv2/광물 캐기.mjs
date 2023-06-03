/**
 *
 * @param {number[]} picks 곡괭이의 개수를 나타내는 정수 배열
 * @param {string[]} minerals 광물들의 순서를 나타내는 문자열 배열
 * @returns {number} 마인이 작업을 끝내기까지 필요한 최소한의 피로도
 */
export const solution = (picks, minerals) => {
  let fatigue = 0;
  const arr = [];

  for (let i = 0; i < minerals.length; i += 5) {
    const dict = { diamond: 0, iron: 0, stone: 0 };

    for (let mi = i, range = i + 5; mi < range; ++mi) dict[minerals[mi]]++;

    arr.push([
      dict.diamond + dict.iron + dict.stone,
      dict.diamond * 5 + dict.iron + dict.stone,
      dict.diamond * 25 + dict.iron * 5 + dict.stone,
    ]);
  }

  arr
    .sort((a, b) => b[2] - a[2])
    .map((v) => {
      if (picks[0] > 0) return picks[0]--, (fatigue += v[0]);
      if (picks[1] > 0) return picks[1]--, (fatigue += v[1]);
      if (picks[2] > 0) return picks[2]--, (fatigue += v[2]);
    });

  return fatigue;
};

export const examples__arr = [
  {
    picks: [1, 3, 2],
    minerals: [
      "diamond",
      "diamond",
      "diamond",
      "iron",
      "iron",
      "diamond",
      "iron",
      "stone",
    ],
    answer: 12,
  },
  {
    picks: [0, 1, 1],
    minerals: [
      "diamond",
      "diamond",
      "diamond",
      "diamond",
      "diamond",
      "iron",
      "iron",
      "iron",
      "iron",
      "iron",
      "diamond",
    ],
    answer: 50,
  },
];

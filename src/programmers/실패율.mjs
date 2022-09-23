// 실패율 = 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
// 전체 스테이지의 개수 N
// 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages

// RETURN: 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열

class NArr extends Array {
  sortByValueInDesc() {
    this.sort((a, b) => b - a);
  }
}
export const solution = (n = 0, stages = [0]) => {
  const arr = new NArr(...stages);
  const map = new Map();

  arr.sortByValueInDesc();
  for (let i = 0, count = 1, len = arr.length; i < len; ++i) {
    if (arr[i] !== arr[i + 1]) {
      map.set(arr[i], count / (i + 1));
      count = 1;
    } else {
      ++count;
    }
  }

  return Array.from({ length: n }, (_, i) => i + 1).sort((a, b) => (map.get(b) || 0) - (map.get(a) || 0));
};

export const examples__arr = [
  {
    n: 5,
    stages: [2, 1, 2, 6, 2, 4, 3, 3],
    answer: [3, 4, 2, 1, 5],
  },
  {
    n: 4,
    stages: [4, 4, 4, 4, 4],
    answer: [4, 1, 2, 3],
  },
];

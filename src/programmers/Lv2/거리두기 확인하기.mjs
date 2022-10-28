export const solution = (_places = [[""]]) => {
  return _places.map((p) => isKeepingDistance(p));
};

const isKeepingDistance = (p = [""]) => {
  let queue = [];

  for (let i = 0; i < 5; ++i) {
    for (let j = 0; j < 5; ++j) {
      if (p[i][j] === "P") {
        queue.push([i, j]);
      }
    }
  }

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  while (queue.length) {
    let [x, y] = queue.shift();

    for (let i = 0; i < 4; ++i) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx < 0 || nx >= 5 || ny < 0 || ny >= 5) continue;
      if (p[nx][ny] === "X") continue;
      if (p[nx][ny] === "P") return 0;

      for (let j = 0; j < 4; ++j) {
        let ax = nx + dx[j];
        let ay = ny + dy[j];

        if (ax < 0 || ax >= 5 || ay < 0 || ay >= 5) continue;
        if (ax === x && ay === y) continue;
        if (p[ax][ay] === "P") return 0;
      }
    }
  }

  return 1;
};

/**
 * @param {string[][]} _places 대기실 목록
 * - P: 응시자
 * - O: 빈 테이블
 * - X: 파티션
 */
export const fail_solution = (_places) => {
  const rooms = Array.from({ length: 5 }, () => 1);

  for (let pi = 0; pi < 5; ++pi) {
    const p = _places[pi];
    for (let i = 1; i < 5 && rooms[pi]; ++i) {
      for (let j = 1; j < 5; ++j) {
        if (p[i][j] === "P") {
          if (p[i - 1][j] === "X" && p[i][j - 1] === "X") continue;
          if (p[i - 1][j] === "P" || p[i][j - 1] === "P" || p[i - 1][j - 1] === "P") {
            rooms[pi] = 0;
            break;
          }
        }
      }
    }
  }

  return rooms;
};

export class Distance {
  /**
   * Manhatten Distance
   */
  static L1(a, b) {
    return Math.abs(a.row - b.row) + Math.abs(a.column - b.column);
  }

  /**
   * Euclidean Distance
   */
  static L2() {
    return 1;
  }
}

class Grid {}

export const examples__arr = [
  {
    places: [
      ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
      ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
      ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
      ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
      ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
    ],
    answer: [1, 0, 1, 1, 1],
  },
];

/**
 * @param {string[]} maps
 * @returns
 */
export function solution(maps) {
  maps = maps.map((arr) => arr.split(""));

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  function dfs(x, y, sum) {
    for (let i = 0; i < 4; ++i) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && ny >= 0 && nx < maps.length && ny < maps[0].length) {
        if (maps[nx][ny] !== "X") {
          const tmp = maps[nx][ny];
          maps[nx][ny] = "X";
        }
      }
    }

    return sum;
  }
}

export const examples__arr = [
  {
    maps: ["X591X", "X1X5X", "X231X", "1XXX1"],
    answer: [1, 1, 27],
  },
  {
    maps: ["XXX", "XXX", "XXX"],
    answer: [-1],
  },
];

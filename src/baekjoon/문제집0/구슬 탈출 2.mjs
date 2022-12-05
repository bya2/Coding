/**
 * 빨간 구슬 구멍에 빼기
 * 파란 구슬 구멍에 x
 * 세로n 가로m
 * 왼오위아
 * 최소 몇 번에 빨간 구슬을 빼는지
 * @param {string[]} inputs
 * - .: 빈 칸
 * - #: 벽
 * - o: 구멍
 * - R: 구슬(빨강)
 * - B: 구슬(파랑)
 */
export const solution = (inputs) => {
  const words = {
    blank: ".",
    wall: "#",
    hole: "o",
    red: "R",
    blue: "B",
  };

  const n = +inputs[0][0];
  const m = +inputs[0][2];

  const move = (d) => {
    switch (d) {
      case "U":
        break;
      case "D":
        break;
      case "L":
        break;
      case "R":
        break;
      default:
    }
  };
};

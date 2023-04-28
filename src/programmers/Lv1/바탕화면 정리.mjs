export const solution = (wallpaper = [""]) => {
  const pos = [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, 0, 0];

  for (let x = 0; x < wallpaper.length; ++x) {
    const s = wallpaper[x];

    let my;
    for (let y = 0; y < s.length; ++y) {
      if (s[y] === "#") {
        if (pos[0] > x) pos[0] = x;
        if (pos[1] > y) pos[1] = y;
        if (pos[2] < x) pos[2] = x;
        if (pos[3] < y) pos[3] = y;
        my = y;
        break;
      }
    }

    for (let y = s.length - 1; y > my; --y) {
      if (s[y] === "#") {
        if (pos[0] > x) pos[0] = x;
        if (pos[1] > y) pos[1] = y;
        if (pos[2] < x) pos[2] = x;
        if (pos[3] < y) pos[3] = y;
        break;
      }
    }
  }

  pos[2]++;
  pos[3]++;

  return pos;
};

export const examples__arr = [
  {
    wallpaper: [".#...", "..#..", "...#."],
    answer: [0, 1, 3, 4],
  },
  {
    wallpaper: [
      "..........",
      ".....#....",
      "......##..",
      "...##.....",
      "....#.....",
    ],
    answer: [1, 3, 5, 8],
  },
  {
    wallpaper: [
      ".##...##.",
      "#..#.#..#",
      "#...#...#",
      ".#.....#.",
      "..#...#..",
      "...#.#...",
      "....#....",
    ],
    answer: [0, 0, 7, 9],
  },
  {
    wallpaper: ["..", "#."],
    answer: [1, 0, 2, 1],
  },
];

import Coord2D from "../../logic/Coordinate2D.mjs";

export const solution = (dirs = "") => {
  dirs = dirs.split("");
  return new Coord2D({ limit: 5 }).getPaths(dirs).size / 2;
};

export const solution2 = (dirs = "") => {
  const move = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
  };

  dirs = dirs.split("");
  let curr = [0, 0];
  let set = new Set();

  for (let d of dirs) {
    let [nx, ny] = curr.map((v, i) => v + move[d][i]);
    if (nx > 5 || nx < -5 || ny > 5 || ny < -5) continue;
    set.add(`${curr[0]}${curr[1]}${nx}${ny}`);
    set.add(`${nx}${ny}${curr[0]}${curr[1]}`);
    curr = [nx, ny];
  }

  return (set.size / 2) >> 0;
};

export function coordinatePlane(dirs) {
  let pos = {
    x: 0,
    y: 0,
  };
  let set = new Set();

  for (let dir of dirs) {
    let prev = { ...pos };
    if (!move(pos, dir)) continue;
    set.add(getGenerateKey(prev, pos));
    set.add(getGenerateKey(pos, prev));
  }

  return set.size / 2;
}

function move(now, dir, limit = 5) {
  switch (dir) {
    case "U":
      if (now.y < limit) {
        ++now.y;
        return true;
      }
      break;
    case "D":
      if (now.y > -limit) {
        --now.y;
        return true;
      }
      break;
    case "R":
      if (now.x < limit) {
        ++now.x;
        return true;
      }
      break;
    case "L":
      if (now.x > -limit) {
        --now.x;
        return true;
      }
      break;
  }

  return false;
}

function getGenerateKey(pos1, pos2) {
  return `${pos1.x}${pos1.y}${pos2.x}${pos2.y}`;
}

export const examples__arr = [
  {
    dirs: "ULURRDLLU",
    answer: 7,
  },
  {
    dirs: "LULLLLLLU",
    answer: 7,
  },
];

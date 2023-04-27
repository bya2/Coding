export const solution = (park = [""], routes = [""]) => {
  const dict = {
    E: [0, 1],
    W: [0, -1],
    S: [1, 0],
    N: [-1, 0],
  };

  let [x, y] = [0, 0];

  const xLen = park.length;
  const yLen = park[0].length;
  console.log("Len", xLen, yLen);

  for (let i = 0; i < park.length; ++i) {
    const sPos = park[i].indexOf("S");
    if (sPos !== -1) {
      x = i;
      y = sPos;
      break;
    }
  }

  for (const route of routes) {
    const [dir, range] = route.split(" ");
    const nx = x + range * dict[dir][0];
    const ny = y + range * dict[dir][1];
    let flag = true;

    if (nx >= 0 && ny >= 0 && nx < xLen && ny < yLen) {
      for (let i = 0, [dx, dy] = [x, y]; i < range; ++i) {
        dx += dict[dir][0];
        dy += dict[dir][1];
        if (park[dx][dy] === "X") {
          flag = false;
          break;
        }
      }
    } else {
      flag = false;
    }

    if (flag) {
      x = nx;
      y = ny;
    }
  }

  return [x, y];
};

export const examples__arr = [
  {
    park: ["SOO", "OOO", "OOO"],
    routes: ["E 2", "S 2", "W 1"],
    answer: [2, 1],
  },
  {
    park: ["SOO", "OXX", "OOO"],
    routes: ["E 2", "S 2", "W 1"],
    answer: [0, 1],
  },
  {
    park: ["OSO", "OOO", "OXO", "OOO"],
    routes: ["E 2", "S 3", "W 1"],
    answer: [0, 0],
  },
];

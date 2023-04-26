export const solution = (park = [""], routes = [""]) => {
  const dict = {
    E: [0, 1],
    W: [0, -1],
    S: [1, 0],
  };

  let [x, y] = [0, 0];

  for (let i = 0; i < park.length; ++i) {
    const sPos = park[i].indexOf("S");
    if (sPos !== -1) {
      x = i;
      y = sPos;
      break;
    }
  }

  const rows = park.length;
  const columns = park[0].length;

  for (const route of routes) {
    const [dir, range] = route.split(" ");

    let nx = x + dict[dir][0] * range;
    let ny = y + dict[dir][1] * range;

    if (nx <= rows || ny <= columns) continue;

    x = nx;
    y = ny;
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

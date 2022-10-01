import { sumValueOfKeyInMap } from "../../Hash/index.mjs";

export const solution = (genres, plays) => {
  let albumList = [];
  const dicOfSum = new Map();
  const dicOfDup = new Map();

  const albumListLen = genres.length;
  for (let i = 0; i < albumListLen; ++i) {
    albumList = [...albumList, { no: i, genre: genres[i], play: plays[i] }];
    sumValueOfKeyInMap(dicOfSum, genres[i], plays[i]);
  }

  albumList = albumList
    .sort((prev, next) => {
      if (prev.genre !== next.genre) return dicOfSum.get(next.genre) - dicOfSum.get(prev.genre);
      if (prev.play !== next.play) return next.play - prev.play;
      return prev.no - next.no;
    })
    .filter((album) => {
      if (dicOfDup.get(album.genre) >= 2) return false;
      dicOfDup.set(album.genre, dicOfDup.has(album.genre) ? dicOfDup.get(album.genre) + 1 : 1);
      return true;
    })
    .map((album) => {
      return album.no;
    });

  return albumList;
};

export const other_solution = (genres, plays) => {
  const dic = genres.reduce((obj, t, i) => {
    if (obj[t]) {
      obj[t][0].push([plays[i], i]);
      obj[t][1] += plays[i];
    } else obj[t] = [[[plays[i], i]], plays[i]];
    return obj;
  }, {});

  const list = Object.values(dic);
  list.sort((a, b) => b[1] - a[1]).forEach((el) => el[0].sort((a, b) => a[1] - b[1]).sort((a, b) => b[0] - a[0]));

  const answer = [];
  for (let i = 0; i < list.length; i += 1) {
    for (let j = 0; j < list[i][0].length; j += 1) {
      answer.push(list[i][0][j][1]);
      if (j == 1) break;
    }
  }
  return answer;
};

export const examples__arr = [
  {
    genres: ["classic", "pop", "classic", "classic", "pop"],
    plays: [500, 600, 150, 800, 2500],
    answer: [4, 1, 3, 0],
  },
];

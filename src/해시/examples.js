/**
 * 차집합
 * @param {string[]} P
 * @param {string[]} C
 */
export const 완주하지못한선수 = (P, C) => {
  const N = P.length;
  const M = C.length;
  const map = new Map();

  for (let i = 0; i < M; ++i) {
    const p = P[i];
    const c = C[i];
    map.set(p, map.has(p) ? map.get(p) + 1 : 1);
    map.set(c, map.has(c) ? map.get(c) - 1 : -1);
  }

  for (let i = M; i < N; ++i) {
    const p = P[i];
    map.set(p, map.has(p) ? map.get(p) + 1 : 1);
  }

  for (let [k, v] of map) {
    if (v > 0) return k;
  }

  return -1;
};

/**
 * @param {number[]} numbers
 */
export const 폰켓몬 = (numbers) => {
  let types = 0;

  Object.defineProperties(Object.prototype, {
    check: {
      value(key) {
        if (!this[key]) {
          this[key] = true;
          types++;
        }
      },
    },
  });

  const BoolMap = {
    from(keys) {
      return keys.reduce((obj, t) => {
        obj.check(t);
        return obj;
      }, {});
    },
  };

  BoolMap.from(numbers);

  const HALF = numbers.length / 2;
  return types > HALF ? HALF : types;
};

/**
 * @param {[string, string][]} C
 */
export const 의상 = (C) => {};

export const 베스트앨범 = (G, P) => {
  Object.defineProperties(Map.prototype, {
    increase: {
      value(key, by = 1) {
        return this.set(key, (this.get(key) || 0) + by);
      },
    },
  });

  const A = [];
  const accMap = new Map();
  const dupMap = new Map();
  for (let i = 0; i < G.length; ++i) {
    A.push({
      no: i,
      genre: G[i],
      play: P[i],
    });
    accMap.increase(G[i], P[i]);
  }

  return A.sort((a, b) => {
    if (a.genre !== b.genre) return accMap.get(b.genre) - accMap.get(a.genre);
    if (a.play !== b.play) return b.play - a.play;
    return a.no - b.no;
  })
    .filter((album) => {
      if (dupMap.get(album.genre) >= 2) return false;
      dupMap.increase(album.genre);
      return true;
    })
    .map((album) => album.no);
};

export const examples = {
  완주하지못한선수: [
    {
      participants: ["leo", "kiki", "eden"],
      completion: ["eden", "kiki"],
      result: "leo",
    },
    {
      participants: ["marina", "josipa", "nikola", "vinko", "filipa"],
      completion: ["josipa", "filipa", "marina", "nikola"],
      result: "vinko",
    },
    {
      participants: ["mislav", "stanko", "mislav", "ana"],
      completion: ["stanko", "ana", "mislav"],
      result: "mislav",
    },
  ],

  폰켓몬: [
    {
      nums: [3, 1, 2, 3],
      result: 2,
    },
    {
      nums: [3, 3, 3, 2, 2, 4],
      result: 3,
    },
    {
      nums: [3, 3, 3, 2, 2, 2],
      result: 2,
    },
  ],
};

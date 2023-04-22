Object.defineProperty(Array.prototype, "swap", {
  value(i, j) {
    [this[i], this[j]] = [this[j], this[i]];
  },
});

Object.defineProperty(Object.prototype, "swap", {
  value(a, b) {
    [this[a], this[b]] = [this[b], this[a]];
  },
});

export const solution = (players, callings) => {
  // Linked List? x: 검색 시간
  const indexMap = players.reduce((obj, t, i) => ((obj[t] = i), obj), {});
  for (const name of callings) {
    const i = indexMap[name];
    players.swap(i, i - 1);
    indexMap.swap(players[i], players[i - 1]);
  }
  return players;
};

export const examples__arr = [
  {
    players: ["mumu", "soe", "poe", "kai", "mine"],
    callings: ["kai", "kai", "mine", "mine"],
    answer: ["mumu", "kai", "mine", "soe", "poe"],
  },
];

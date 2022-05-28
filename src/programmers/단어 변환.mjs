// BFS
// https://gmlwjd9405.github.io/2018/08/15/algorithm-bfs.html
export const solution = (begin, target, words) => {
  if (!words.includes(target)) {
    return 0;
  }

  let steps = 0;
  const queue = [[begin, steps]];
  const visited = [];
  while (queue.length) {
    let [visit_word, count] = queue.shift();

    if (visit_word === target) {
      return count;
    }

    visited.push(visit_word);

    for (const word of words) {
      if (visited.includes(word)) continue; // 이미 방문

      let not_eq = 0; // 하나의 단어만 변경해야함.
      for (let i = 0; i < word.length; ++i) {
        if (word[i] !== visit_word[i]) {
          ++not_eq;
        }
      }

      if (not_eq === 1) {
        queue.push([word, ++count]);
      }
    }
  }

  return steps;
};

export const examples__arr = [
  {
    begin: "hit",
    target: "cog",
    words: ["hot", "dot", "dog", "lot", "log", "cog"],
    answer: 4,
  },
  {
    begin: "hit",
    target: "cog",
    words: ["hot", "dot", "dog", "lot", "log"],
    answer: 0,
  },
];

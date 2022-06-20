function BFS(node) {
  let queue = [];
  let visited = [];

  while (queue.length) {

  }
}


if (!words.includes(target)) {
  return 0;
}

let steps = 0;
const queue = [[begin, steps]];
const visited = [];

while (queue.length) {
  let [curr_word, step] = queue.shift();  

  if (curr_word === target) return step;

  visited.push(curr_word);

  for (const word of words) {
    if (visited.includes(word)) continue; // 이미 방문

    let not_eq = 0; // 하나의 단어만 변경해야함.
    for (let i = 0; i < word.length; ++i) {
      if (word[i] !== curr_word[i]) {
        ++not_eq;
      }
    }

    if (not_eq === 1) {
      queue.push([word, step + 1]);
    }
  }
}

return steps;
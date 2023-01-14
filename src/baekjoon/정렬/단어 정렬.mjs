/**
 * @param {string[]} inputs
 */
export const solution = (inputs) => {
  // 같은 단어 제외: Hash
  // 길이가 짧은 순서
  // 길이가 같으면 사전 순서
  inputs.shift();
  const dict = {};
  return inputs
    .filter((v) => {
      if (dict[v]) return false;
      else {
        dict[v] = 1;
        return true;
      }
    })
    .sort((a, b) => {
      if (a.length === b.length) {
        if (a < b) return -1;
        else if (b < a) return 1;
        else return 0;
      }
      return a.length - b.length;
    })
    .join("\n");
};

export const examples = [
  {
    inputs: `13
    but
    i
    wont
    hesitate
    no
    more
    no
    more
    it
    cannot
    wait
    im
    yours`,
    answer: `i
    im
    it
    no
    but
    more
    wait
    wont
    yours
    cannot
    hesitate`,
  },
];

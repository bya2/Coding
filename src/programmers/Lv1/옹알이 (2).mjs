/**
 * 발음할 수 있는 문자열(bab)의 개수 리턴
 * - 연속으로 같은 단어 발음 불가
 * @param {string[]} babs
 */
export const solution2 = (babs, words = ["aya", "ye", "woo", "ma"]) => {
  const dupls = words.map((w) => w + w);

  const isValid = (s = "") => {
    if (dupls.some((dupl) => s.includes(dupl))) return false;

    for (let i = 0, len = words.length; i < len; ++i) {
      let w = words[i];
      let wi = s.indexOf(w);
      while (wi !== -1) {
        s = s.replace(w, i);
        wi = s.indexOf(w);
      }
    }

    s = s.replace(/[0123]/g, "");
    return s.length === 0;
  };

  return babs.filter((bab) => isValid(bab)).length;
};

export const solution = (babs, words = ["aya", "ye", "woo", "ma"]) => {
  const isValid = (s = "") => {
    for (let i = 0, len = words.length; i < len; ++i) {
      const w = words[i];
      let pi = -1;
      let wi = s.indexOf(w);

      while (wi !== -1) {
        s = s.replace(w, i);
        if (pi + 1 === wi) break;
        pi = wi;
        wi = s.indexOf(w);
      }
    }

    s = s.replace(/[0123]/g, "");

    return s.length === 0;
  };

  return babs.filter((bab) => isValid(bab)).length;
};

export const fail_solution = (babbling) => {
  const words = ["aya", "ye", "woo", "ma"];

  return babbling.filter((s) => {
    for (let w of words) {
      let prev;
      let i;
      while ((i = s.indexOf(w)) !== -1) {
        if (i === -1) break;
        if (typeof prev !== "undefined" && prev === i) break;
        prev = i;
        s = s.replace(w, "");
      }
    }
    return s.length === 0;
  }).length;
};

export const examples__arr = [
  {
    babbling: ["aya", "yee", "u", "maa"],
    answer: 1,
  },
  {
    babbling: ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"],
    answer: 2,
  },
];

/**
 * @param {string[]} inputs
 */
export const solution = (inputs) => {
  // INPUTS:
  // - 카드의 개수 N, M
  // - 카드에 쓰여져 있는 수들

  // OUTPUT:
  // - M보다 작거나 같을 수 있는 카드 3장의 합의 최댓값

  const [, m] = inputs[0].split(" ").map(Number);
  const cards = inputs[1].split(" ").map(Number);

  let maximum = 0;
  (function recur(accu = 0, index = 0, depth = 0) {
    if (maximum === m) return;

    if (depth === 3) {
      if (accu <= m && accu > maximum) maximum = accu;
      return;
    }

    for (let i = index, len = cards.length; i < len; ++i) {
      recur(accu + cards[i], i + 1, depth + 1);
    }
  })();

  return maximum + "";
};

export const examples = [
  {
    inputs: `5 21
    5 6 7 8 9`,
    answer: `21`,
  },
  {
    inputs: `10 500
    93 181 245 214 315 36 185 138 216 295`,
    answer: `497`,
  },
];

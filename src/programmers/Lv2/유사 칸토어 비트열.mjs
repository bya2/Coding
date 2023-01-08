/*
 * 칸토어 집합: 0과 1 사이의 실수로 이루어진 집합.
 * [0, 1]부터 시작하여 각 구간을 3등분하여 가운데 구간을 반복적으로 제외하는 방식으로 만들어짐.
 */

/**
 * @param {number} n n번째 유사 칸토어 비트열 = n-1번째 유사 칸토어 비트열에서의 1을 11011으로 치환하고 0을 00000으로 치환
 * @param {number} l 1의 개수가 몇 개인지 알고 싶은 구간 l~r
 * @param {number} r
 */
let ans = 0;
let N, L, R;

export function solution(n, l, r) {
  [N, L, R] = [n, l - 1, r - 1];
  recur(1, 0, 4, "11011");
  return ans;
}

function recur(depth, currL, currR, val) {
  if (depth >= N) {
    if (L <= currL && currL <= R && L <= currR && currR <= R)
      ans += val[0] == "1" ? 4 : 0;
    else if (currL < L && L <= currR && currR <= R)
      for (let i = L % 5; i <= currR % 5; i++) val[i] == "1" && ans++;
    else if (L <= currL && currL <= R && currR > R)
      for (let i = currL % 5; i <= R % 5; i++) val[i] == "1" && ans++;
    else if (currL <= L && R <= currR)
      for (let i = L % 5; i <= R % 5; i++) val[i] == "1" && ans++;
    return;
  }

  for (let i = currL; i <= currR; i++) {
    let tempL = Math.pow(5, N - depth) * i;
    let tempR = tempL + Math.pow(5, N - depth) - 1;
    if ((tempL < L && tempR < L) || (tempL > R && tempR > R)) continue;
    val[i % 5] == "1" && recur(depth + 1, i * 5, i * 5 + 4, "11011");
  }
}

export function solution2(n, l, r) {
  let answer = 0;

  function getCount(num) {
    if (num == 0) return 0;
    if (num < 5) {
      return "11011".slice(0, num).match(/1/g).length;
    }

    var base = 1;
    while (Math.pow(5, base + 1) < num) {
      base++;
    }

    var section = Math.floor(num / Math.pow(5, base));
    var remainder = num % Math.pow(5, base);

    answer = section * Math.pow(4, base);

    if (section >= 3) answer -= Math.pow(4, base);

    if (section == 2) return answer;
    else return answer + getCount(remainder);
  }

  return getCount(r) - getCount(l - 1);
}

export const examples__arr = [
  {
    n: 2,
    l: 4,
    r: 17,
    answer: 8,
  },
];

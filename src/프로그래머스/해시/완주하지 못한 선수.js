/**
 * @param {string[]} P
 * @param {string[]} C
 */
function solution(P, C) {
  // P: 전체
  // C: 일부
  // R: P가 C를 차집합

  const inc = (map, k) => map.set(k, map.has(k) ? map.get(k) + 1 : 1);
  const desc = (map, k) => map.set(k, map.has(k) ? map.get(k) - 1 : -1);

  const pLen = P.length;
  const cLen = C.length;
  const map = new Map();

  for (let i = 0; i < cLen; ++i) {
    inc(map, P[i]);
    desc(map, C[i]);
  }

  for (let i = cLen; i < pLen; ++i) {
    inc(map, P[i]);
  }

  for (let [k, v] of map) {
    if (v > 0) return k;
  }

  return -1;
}

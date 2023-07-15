export function solution(arr) {
  return arr
    .reduce(
      ([m1, m2], [n1, n2]) => [
        Math.max(m1, Math.max(n1, n2)),
        Math.max(m2, Math.min(n1, n2)),
      ],
      [0, 0]
    )
    .reduce((a, b) => a * b, 0);
}

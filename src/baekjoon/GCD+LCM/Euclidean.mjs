/**
 * @param {number} n
 * @param {number} m
 */
export const gcdOf = (n, m) => {
  return n % m === 0 ? m : gcdOf(m, n % m);
};

/**
 * @param {number} n
 * @param {number} m
 */
export const lcmOf = (n, m) => {
  return (n * m) / gcdOf(n, m);
};

/**
 * @param  {...number} list
 */
export const gcdFor = (...list) => {
  return list.reduce((n, m) => gcdOf(n, m));
};

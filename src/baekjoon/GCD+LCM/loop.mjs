/**
 * @param {number} n
 * @param {number} m
 */
export const gcdOf = (n, m) => {
  for (let r = n % m; r !== 0; r = n % m) {
    n = m;
    m = r;
  }
  return m;
};

/**
 * @param {number} n
 * @param {number} m
 */
export const lcmOf = (n, m) => {
  const mtp = n * m;
  for (let r = n % m; r !== 0; r = n % m) {
    n = m;
    m = r;
  }
  return ~~(mtp / m);
};

/**
 * @param  {...number} list
 */
export const gcdFor = (...numbers) => {
  const _gcdOf = gcdOf;
  return numbers.reduce((n, m) => _gcdOf(n, m));
};

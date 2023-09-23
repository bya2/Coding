export const gcdOf = (n, m) => {
  let tmp = n % m;
  while (tmp !== 0) {
    n = m;
    m = tmp;
    tmp = n % m;
  }
  return m;
};

export const lcmOf = (n, m) => {
  let tmp = n % m;
  const mtp = n * m;
  while (tmp !== 0) {
    n = m;
    m = tmp;
    tmp = n % m;
  }
  return ~~(mtp / m);
};

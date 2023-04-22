export const binarySearch = () => {
  let minimum = 1;
  let maximum = n ** 2;

  while (minimum <= maximum) {
    const median = ~~((minimum + maximum) / 2);
    let count = 0;
    for (let i = 1; i <= n; ++i) count += Math.min(n, ~~(median / i));
    if (count >= k) maximum = median - 1;
    else minimum = median + 1;
  }

  return maximum;s
};

export function binarySearch() {
  let minimum = 1;
  let maximum = this[this.length - 1];

  while (minimum <= maximum) {
    const median = Math.floor((minimum + maximum) / 2);
    if (this.countDistance(median) >= value) minimum = median + 1;
    else maximum = median - 1;
  }

  return maximum;
}

Object.defineProperties(String.prototype, {
  toNumArr: {
    value() {
      return this.split(" ").map(Number);
    },
  },
});

Object.defineProperties(Array.prototype, {
  binarySearchIndex: {
    value(value) {
      let si = 0;
      let ei = this.length - 1;

      while (si <= ei) {
        let mi = (si + ei) >> 1;
        if (this[mi] === value) return mi;
        if (this[mi] < value) si = ++mi;
        else ei = --mi;
      }

      return -1;
    },
  },

  binarySearch: {
    /**
     * @param {(median: number, this: number[]) => number} cb 각 요소에 대한 처리 및 결산
     * @param {number} least 결산된 값의 최저값
     */
    value(cb, least) {
      this.sort((a, b) => a - b);

      let minimum = this[0];
      let maximum = this.at(-1);

      while (minimum <= maximum) {
        let median = (minimum + maximum) >> 1;
        if (cb(median, this) >= least) minimum = ++median;
        else maximum = --median;
      }

      return maximum;
    },
  },

  binarySearch__랜선_자르기: {
    value(needed) {
      let minimum = 0;
      let maximum = Math.max(...this);

      while (minimum <= maximum) {
        let median = (minimum + maximum) >> 1;
        const amounts = this.map((n) => (n / median) >> 0).reduce(
          (a, b) => a + b
        );
        if (amounts >= needed) minimum = ++median;
        else maximum = --median;
      }

      return maximum;
    },
  },

  binarySearch__나무_자르기: {
    value(least) {
      this.sort((a, b) => a - b);

      let minimum = 0;
      let maximum = this.at(-1);

      while (minimum <= maximum) {
        let median = (minimum + maximum) >> 1;
        const total = this.reduce(
          (acc, h) => acc + (h > median ? h - median : 0),
          0
        );

        if (total >= least) minimum = ++median;
        else maximum = --median;
      }

      return maximum;
    },
  },
});

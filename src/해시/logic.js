Object.defineProperties(Object.prototype, {
  check: {
    value(key) {
      if (!this[key]) {
        this[key] = true;
      }
    },
  },

  count: {
    value(key, by = 1) {
      this[key] = (this[key] || 0) + by;
    },
  },

  increase: {
    value(key, by = 1) {
      this[key] += by;
    },
  },

  decrease: {
    value(key, by = 1) {
      this[key] -= by;
    },
  },

  add: {
    value(keys) {
      return keys.reduce((acc, key) => acc + (this[key] ?? 0), 0);
    },
  },
});

export const CountMap = {
  from(keys) {
    return keys.reduce((obj, t) => (obj.count(t), obj), {});
  },
};

export const BoolMap = {
  from(keys) {
    return keys.reduce((obj, t) => (obj.check(t), obj), {});
  },
};

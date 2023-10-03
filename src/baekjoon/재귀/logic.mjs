if (!Object.prototype.hasOwnProperty) {
  Object.prototype.hasOwnProperty = function (prop) {
    var proto = obj.__proto__ || obj.constructor.prototype;
    return prop in this && (!(prop in proto) || proto[prop] !== this[prop]);
  };
}

export const memoize = (cb) => {
  const cache = {};
  return (prop) => {
    if (prop in cache && cache[prop] !== undefined) return cache[prop];
    else {
      cache[prop] = cb(prop);
    }
  };
};

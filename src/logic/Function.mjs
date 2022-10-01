export default class F extends Function {
  static curry(cb) {
    return (...args) => {
      if (args.length >= cb.length) return cb(...args);
      return this.curry(cb.bind(null, ...args));
    };
  }

  static match() {
    return this.curry((regex, s) => s.match(regex));
  }

  static pluck() {
    return this.curry((key, obj) => obj?.[key]);
  }
}

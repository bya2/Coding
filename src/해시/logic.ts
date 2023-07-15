export const dict = {
  from: <K, V>(keys: K[], values: V[]): Map<K, V> => {
    return keys.reduce(
      (map, key, i) => map.set(key, values[i]),
      new Map<K, V>()
    );
  },
};

export const NumMap = class<K = any> extends Map<K, number> {
  increase(key: K, value: number = 1) {
    return this.set(key, (this.get(key) ?? 0) + value);
  }

  decrease(key: K, value: number = 1) {
    return this.set(key, (this.get(key) ?? 0) - value);
  }

  static from<K = any>(keys: K[]): NumMap<K> {
    return keys.reduce((map, key) => map.increase(key), new this<K>());
  }
};

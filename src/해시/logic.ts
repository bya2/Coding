Object.defineProperties(Map.prototype, {});

Object.defineProperties(Map, {});

export interface IChart<K> {
  increase(key: K, by: number)
}

export const Chart = class<K = any>
  extends Map<K, number>
  implements IChart<K>
{
  increase(key: K, by = 1) {
    return this.set(key, this.get(key)! + by);
  }
};

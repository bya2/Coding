const getDicOfNumberFromList = (_list: string[]): { [key: string]: number } => {
  return _list.reduce((dic, elem) => {
    dic[elem] = dic[elem] ? dic[elem] + 1 : 1;
    return dic;
  }, {});
};

const getMapOfNumberFromList = <E = any>(_list: E[]): Map<E, number> => {
  return _list.reduce((dic, elem) => {
    dic.set(elem, dic.has(elem) ? dic.get(elem) + 1 : 1);
    return dic;
  }, new Map());
};

const addNumberInMap = <K = any>(map: Map<K, number>, key: K, n: number): Map<K, number> => {
  map.set(key, map.has(key) ? (map.get(key) as number) + n : n);
  return map;
};

const getDicFromList = <K = any, V = any>(list: K[], initialValue: V): Map<K, V> => {
  return list.reduce((dic, elem) => {
    dic.set(elem, initialValue);
    return dic;
  }, new Map<K, V>());
};

const getDicFromItemList = <K = any, V = any>(list: any[], key: K, initialValue: V): Map<K, V> => {
  return list.reduce((dic, item) => {
    dic.set(item[key], initialValue);
    return dic;
  }, new Map<K, V>());
};

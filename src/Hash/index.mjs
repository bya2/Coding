export const getDicOfNumberFromArr = (_arr) => {
  const dic = new Map();

  const arrLen = _arr.length;
  for (let i = 0; i < arrLen; ++i) {
    dic.set(_arr[i], dic.has(_arr[i]) ? dic.get(_arr[i]) + 1 : 1);
  }

  return dic;
};

export const getDicOfNumberFromMapLikeArr = (_nArr, _keyIdx = 0) => {
  const dic = new Map();

  const nArrLen = _nArr.length;
  for (let i = 0; i < nArrLen; ++i) {
    dic.set(_nArr[i][_keyIdx], dic.has(_nArr[i][_keyIdx]) ? dic.get(_nArr[i][_keyIdx]) + 1 : 1);
  }

  return dic;
};

export const getDicOfSumFromTwoArr = (_keyArr, _valArr) => {
  if (_keyArr.length !== _valArr.length) {
    return null;
  }

  const dic = new Map();
  const arrLen = _keyArr.length;

  for (let i = 0; i < arrLen; ++i) {
    sumValueOfKeyInMap(dic, _keyArr[i], _valArr[i]);
  }

  return dic;
};

export const sumValueOfKeyInMap = (_map, _key, _value) => {
  if (_map.has(_key)) {
    _map.set(_key, _map.get(_key) + _value);
  } else {
    _map.set(_key, _value);
  }
};

export const findOneInArrUsingMap = (_arr, _map) => {
  return _arr.find((elem) => {
    if (_map.get(elem)) {
      _map.set(elem, _map.get(elem) - 1);
      return false;
    } else {
      return true;
    }
  });
};

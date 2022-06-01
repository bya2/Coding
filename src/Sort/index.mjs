export const sortNumber = (_arr, _order = 0) => {
  switch (_order) {
    case (0, "asc"):
    default:
      return [..._arr].sort((prev, next) => prev - next);

    case (1, "desc"):
      return [..._arr].sort((prev, next) => next - prev);
  }
};

export const sortNumberByObjProp = (_arr, _prop, _order = 0) => {
  switch (_order) {
    case 0:
    default:
      return [..._arr].sort((prev, next) => prev[_prop] - next[_prop]);

    case 1:
      return [..._arr].sort((prev, next) => next[_prop] - prev[_prop]);
  }
};

export const sortNumberByMapKey = (_arr, _key, _order = 0) => {
  switch (_order) {
    case 0:
    default:
      return [..._arr].sort((prev, next) => prev.get(_key) - next.get(_key));

    case 1:
      return [..._arr].sort((prev, next) => next.get(_key) - prev.get(_key));
  }
};

export const sortNumberByKeyToProp = (_arr, _map, _prop, _order = 0) => {
  switch (_order) {
    case 0:
    default:
      return [..._arr].sort((prev, next) => {
        if (prev[_prop] !== next[_prop]) return _map.get(prev[_prop]) - _map.get(next[_prop]);
        return 0;
      });

    case 1:
      return [..._arr].sort((prev, next) => {
        if (prev[_prop] !== next[_prop]) return _map.get(next[_prop]) - _map.get(prev[_prop]);
        return 0;
      });
  }
};

export const getBigger = <E extends number>(el1: E, el2: E): E => (el1 < el2 ? el2 : el1);

export const getSmaller = <E extends number>(el1: E, el2: E): E => (el1 < el2 ? el1 : el2);

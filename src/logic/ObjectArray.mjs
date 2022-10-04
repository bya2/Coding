import Arr from "./Array.mjs";

export default class ObjArr extends Arr {
  sortByPropsInAsc(props = [], map) {
    if (props instanceof Array) {
      this.sort((objA, objB) => {
        for (let prop of props)
          if (objA[prop] !== objB[prop])
            return map instanceof Map ? map.get(objA[prop]) - map.get(objB[prop]) : objA[prop] - objB[prop];
      });
    }
  }

  sortByPropsInDesc(props = [], map) {
    if (props instanceof Array) {
      this.sort((objA, objB) => {
        for (const prop of props)
          if (objB[prop] !== objA[prop])
            return map instanceof Map ? map.get(objB[prop]) - map.get(objA[prop]) : objB[prop] - objA[prop];
      });
    }
  }
}

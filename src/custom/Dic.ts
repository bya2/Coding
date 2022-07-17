interface DicInterface {
  
}

export default class Dic<T extends object> implements DicInterface {
  _data: T;

  constructor(_data: T) {
    this._data = _data;
  }

}

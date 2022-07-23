export class List<Data = any> {
  data: Data[];
  constructor(data: Data[]) {
    this.data = data;
  }

  get size() {
    return this.data.length;
  }

  insert() {
    this.data.splice()
  }

  delete() {

  }
}

import { uuid } from "uuidv4";

export class Entity {
  _id: string = uuid();
  _name?: string;

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  set name(input) {
    if (input && input.length > 0) {
      this._name = input;
    }
  }
}

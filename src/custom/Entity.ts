import { uuid } from "uuidv4";

interface EntityInterface {
  readonly _id?: string;
  _name?: string;
}

export default class Entity implements EntityInterface {
  declare readonly _id: string;

  constructor() {
    this._id = uuid();
  }

  get id() {
    return this._id;
  }
}

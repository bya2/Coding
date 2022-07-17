import { Entity } from ".";

export default class User extends Entity {
  _password?: string;
  _hashed?: string;
  _nickname?: string;
  _email?: string;
  _tel?: string;

  constructor() {
    super();
    this._password = "";
    this._nickname = "";
    this._email = "";
    this._tel = "";
  }

  get password() {
    return this._password;
  }

  get email() {
    return this._email;
  }

  get nickname() {
    return this._nickname;
  }

  get tel() {
    return this._tel;
  }
}

import { Entity } from ".";

interface UserInfo {

}

export default class User extends Entity {
  #password?: string;
  #hashed?: string;
  #nickname?: string;
  #email?: string;
  #tel?: string;

  constructor() {
    super();
    this.#password = "";
    this.#hashed = "";
    this.#nickname = "";
    this.#email = "";
    this.#tel = "";
  }

  get password() {
    return this.#password;
  }

  get email() {
    return this.#email;
  }

  get nickname() {
    return this.#nickname;
  }

  get tel() {
    return this.#tel;
  }
}

export default class Entity {
  id;
}

export class User extends Entity {
  password;
  email;
  birth;
  address;
}

export class Member extends User {
  
}
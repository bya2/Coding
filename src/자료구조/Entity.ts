interface EntityInterface {

}

class Entity implements EntityInterface {
  _id;
  _name;

  constructor(id: string) {
    this._id = id;
  }

  
}
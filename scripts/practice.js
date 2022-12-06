function Kitten(name, interests, isGoodWithCats, isGoodWithDogs, isGoodWithKids, photo, age=0) {
  this.name = name;
  this.interests = interests;
  this.isGoodWithCats = isGoodWithCats;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithKids = isGoodWithKids;
  this.photo = photo;
  this.age = age;
}

Kitten.prototype.getAge = function(){
  this.age = `${this.name} is ${this.age} years old.`;
};
